my-nextjs-app/
├── app/
│   ├── (routes)/                      # Route group for organizational purposes
│   │   ├── dashboard/                 # Nested route for /dashboard
│   │   │   ├── layout.tsx             # Layout for dashboard routes
│   │   │   ├── page.tsx               # Page for /dashboard
│   │   │   ├── not-found.tsx          # Custom 404 for dashboard route
│   │   │   ├── [id]/                  # Dynamic route for /dashboard/:id
│   │   │   │   ├── page.tsx           # Page for dynamic route
│   │   │   ├── [...slug]/             # Catch-all route for /dashboard/*
│   │   │   │   ├── page.tsx           # Page for catch-all route
│   │   ├── blog/                      # Nested route for /blog
│   │   │   ├── layout.tsx             # Layout for blog routes
│   │   │   ├── page.tsx               # Page for /blog
│   │   │   ├── [slug]/                # Dynamic route for /blog/:slug
│   │   │   │   ├── page.tsx           # Page for blog post
│   │   ├── api/                       # API routes
│   │   │   ├── hello/                 # API endpoint for /api/hello
│   │   │   │   ├── route.ts           # Route handler
│   ├── _components/                   # Private folder for components (not routable)
│   │   ├── Navbar.tsx                 # Reusable Navbar component
│   │   ├── Footer.tsx                 # Reusable Footer component
│   ├── layout.tsx                     # Root layout (required)
│   ├── page.tsx                       # Root page for /
│   ├── not-found.tsx                  # Global 404 page
│   ├── middleware.ts                  # Middleware for request handling
│   ├── instrumentation.ts             # Server lifecycle observability
│   ├── favicon.ico                    # Favicon
│   ├── globals.css                    # Global styles
├── public/                            # Static assets
│   ├── images/                        # Images
│   ├── fonts/                         # Custom fonts
├── src/                               # Optional source folder
│   ├── lib/                           # Utility functions, database configs
│   ├── types/                         # TypeScript types
│   ├── hooks/                         # Custom React hooks
│   ├── styles/                        # Additional styles
├── next.config.ts                     # Next.js configuration
├── package.json                       # Project dependencies
├── tsconfig.json                      # TypeScript configuration
├── README.md  