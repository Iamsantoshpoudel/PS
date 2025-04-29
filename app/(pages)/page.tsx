import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MarqueeDemo } from "../components/Marquee";
import { MorphingText } from "@/Scomponents/magicui/morphing-text";
export default function Home() {
  return (
    <>
      <Navbar />
      <MorphingText texts={["Poudel", "Poudel's Solutions,Contact for more "]} />
      <div className="container p-20">
        <div className=" left-0"></div>
        <div className="flex flex-col md:flex-row gap-8 p-4">
          {/* Left Text */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-xl font-mono">
              Here you can <br />
              see all the solution for <br />
              class 8 & 10 <br />
              for more detail <br />
              <span className="text-blue-500">contact us</span>
            </p>
          </div>

          {/* Right Cards */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Your testimonial or card blocks go here */}
          </div>
        </div>
      </div>
      <MarqueeDemo />

      <Footer />
    </>
  );
}
