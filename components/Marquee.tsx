"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase/firebase"; // Your initialized Firebase config
import { onValue, ref } from "firebase/database";
import Image from "next/image";


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-white text-black dark:bg-black dark:text-white",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <Image className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  const [comments, setComments] = useState<{ img: string; name: string; username: string; body: string }[]>([]);

  useEffect(() => {
    const commentsRef = ref(db, "comments");
    onValue(commentsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const loadedComments = Object.values(data).map((comment: any) => ({
          img: comment.img || "",
          name: comment.name || "",
          username: comment.username || "",
          body: comment.body || "",
        }));
        setComments(loadedComments.reverse()); // newest first
      }
    });
  }, []);

  const mid = Math.ceil(comments.length / 2);
const firstRow = comments.slice(0, mid);
const secondRow = comments.slice(mid);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review,index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review,index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
