import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

function PlaceholderImage() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="544"
      height="306"
      viewBox="0 0 544 306"
    >
      <rect width="100%" height="100%" fill="#DDDDDD" />
      <path
        fill="#999999"
        d="m124.42 135.035-1.84 10.83q1.73-.36 3.31-.52 1.59-.16 3.06-.16 4.11 0 7.24 1.22 3.13 1.23 5.25 3.39 2.13 2.16 3.21 5.06 1.08 2.89 1.08 6.24 0 4.14-1.46 7.56t-4.05 5.85-6.14 3.76q-3.54 1.34-7.72 1.34-2.45 0-4.64-.51-2.2-.5-4.13-1.35-1.92-.84-3.56-1.94t-2.93-2.32l2.73-3.78q.87-1.23 2.27-1.23.9 0 1.84.58.93.57 2.14 1.26 1.2.68 2.84 1.26 1.64.57 3.94.57 2.45 0 4.32-.79 1.88-.79 3.12-2.21t1.87-3.39q.63-1.96.63-4.26 0-4.25-2.47-6.64-2.46-2.4-7.29-2.4-3.7 0-7.59 1.37l-5.55-1.58 4.32-25.28h25.71v3.78q0 1.91-1.19 3.1t-4.03 1.19zm35.1 24.37h15.84v-17.03q0-2.41.32-5.33zm23.58 0h6.55v5.15q0 .72-.47 1.24t-1.33.52h-4.75v12.71h-7.74v-12.71H153.4q-.9 0-1.59-.56-.68-.55-.86-1.38l-.94-4.5 24.66-32.94h8.43zm18.18 0h15.84v-17.03q0-2.41.32-5.33zm23.58 0h6.55v5.15q0 .72-.47 1.24t-1.33.52h-4.75v12.71h-7.74v-12.71h-21.96q-.9 0-1.59-.56-.68-.55-.86-1.38l-.94-4.5 24.66-32.94h8.43zm63.75 7.7-4.71 4.65-12.21-12.21-12.31 12.28-4.72-4.64 12.32-12.35-11.74-11.74 4.68-4.68 11.74 11.74 11.66-11.67 4.75 4.68-11.7 11.7zm29.95-24.8-4.68-.83q.54-3.74 2.09-6.57 1.55-2.82 3.87-4.71t5.33-2.85q3.01-.95 6.46-.95 3.6 0 6.5 1.02 2.9 1.03 4.95 2.85t3.15 4.26q1.1 2.45 1.1 5.3 0 2.48-.56 4.37t-1.6 3.29q-1.05 1.41-2.59 2.38-1.55.97-3.5 1.62 4.68 1.48 6.99 4.5 2.3 3.02 2.3 7.6 0 3.88-1.44 6.87t-3.89 5.02q-2.44 2.04-5.67 3.08-3.22 1.05-6.82 1.05-3.92 0-6.84-.9-2.91-.9-5.07-2.67-2.16-1.76-3.68-4.32-1.51-2.55-2.59-5.9l3.93-1.62q1.54-.65 2.89-.34 1.35.3 1.97 1.45.64 1.26 1.42 2.49.77 1.22 1.85 2.18 1.08.95 2.54 1.54 1.46.6 3.47.6 2.27 0 3.96-.74 1.7-.74 2.83-1.93 1.13-1.18 1.69-2.64t.56-2.94q0-1.87-.4-3.4-.39-1.53-1.65-2.61t-3.62-1.69-6.32-.61v-6.34q3.28-.03 5.44-.61t3.44-1.6q1.27-1.03 1.78-2.47.5-1.44.5-3.17 0-3.67-2.05-5.58-2.05-1.9-5.47-1.9-1.59 0-2.92.45t-2.39 1.26-1.78 1.89-1.08 2.37q-.62 1.66-1.61 2.2t-2.79.25m73.16 10.69q0 6.81-1.46 11.83t-4.03 8.3q-2.58 3.27-6.09 4.87-3.51 1.61-7.58 1.61-4.06 0-7.54-1.61-3.47-1.6-6.03-4.87-2.55-3.28-3.99-8.3t-1.44-11.83q0-6.84 1.44-11.84 1.44-5.01 3.99-8.28 2.56-3.28 6.03-4.88 3.48-1.6 7.54-1.6 4.07 0 7.58 1.6t6.09 4.88q2.57 3.27 4.03 8.28 1.46 5 1.46 11.84m-9.18 0q0-5.65-.83-9.36t-2.22-5.9q-1.38-2.2-3.18-3.08t-3.75-.88q-1.9 0-3.69.88-1.78.88-3.15 3.08-1.36 2.19-2.17 5.9t-.81 9.36.81 9.36 2.17 5.91q1.37 2.19 3.15 3.07 1.79.89 3.69.89 1.95 0 3.75-.89 1.8-.88 3.18-3.07 1.39-2.2 2.22-5.91t.83-9.36m45.21-26.03-15.44 18.9-1.8 2.24q1.51-.76 3.26-1.17 1.74-.42 3.76-.42 2.95 0 5.74.97 2.79.98 4.91 2.94 2.13 1.96 3.42 4.88 1.3 2.91 1.3 6.8 0 3.64-1.33 6.82-1.33 3.19-3.75 5.56-2.41 2.38-5.81 3.75t-7.51 1.37q-4.17 0-7.48-1.34-3.32-1.33-5.66-3.72-2.34-2.4-3.58-5.76-1.24-3.37-1.24-7.47 0-3.67 1.49-7.54 1.5-3.87 4.63-8.05l12.42-16.67q.65-.86 1.89-1.47 1.24-.62 2.86-.62zm-13.43 45.36q2.13 0 3.91-.72t3.06-2.01q1.28-1.3 2-3.04.72-1.75.72-3.8 0-2.23-.69-4.02-.68-1.78-1.94-3.02t-3.02-1.89q-1.77-.65-3.89-.65-2.13 0-3.85.72-1.73.72-2.96 2-1.22 1.28-1.9 3.02-.69 1.75-.69 3.77 0 2.16.6 3.94.59 1.78 1.76 3.04t2.9 1.96 3.99.7"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="mx-auto mt-32 mb-20 w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="mb-16 text-center">
          <p className="mb-4 font-medium text-sm">Organize Life in Seconds</p>
          <h1 className="mx-auto mb-8 max-w-3xl font-heading font-semibold text-4xl tracking-tight sm:text-5xl">
            Capture, Organize & Engage High-Quality Reviews As Code
          </h1>
          <p className="mx-auto max-w-prose text-base">
            Gain full control of your brand's reputation with static,
            pre-optimized review components. Simply copy & paste to showcase
            compelling reviews on your site.
          </p>
        </div>
        <div className="mb-20 flex flex-col items-center justify-center gap-6">
          <Button size="lg">Start for free today</Button>

          <p className="font-medium text-sm">
            join our <span className="font-semibold">1.000+</span> happy
            customers
          </p>
        </div>
      </div>
      <div className="grainy relative overflow-hidden px-4 py-16">
        <div className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
          <div className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="font-medium text-sm">Streamline</p>
              <h1 className="text-balance font-heading font-semibold text-3xl tracking-tight sm:text-4xl">
                Turn Your Code Reviews Into Actionable Insights
              </h1>
              <p className="max-w-prose text-base">
                Transform your development workflow with automated code review
                analysis. Get instant feedback on code quality, security, and
                performance. Identify patterns and track improvements across
                your codebase.
              </p>
            </div>
            <div className="relative w-full overflow-hidden rounded-sm">
              <div className="relative h-full">
                <div className="relative h-full w-full overflow-hidden">
                  <PlaceholderImage />
                </div>
              </div>
            </div>
          </div>
          <div className="mb-16 grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="relative order-2 w-full overflow-hidden rounded-sm md:order-1 md:h-auto">
              <div className="relative h-full">
                <div className="relative h-full w-full overflow-hidden">
                  <PlaceholderImage />
                </div>
              </div>
            </div>
            <div className="order-1 space-y-4 md:order-2">
              <p className="font-medium text-sm">Organize</p>
              <h1 className="text-balance font-heading font-semibold text-3xl tracking-tight sm:text-4xl">
                Streamline Your Review Management Process
              </h1>
              <p className="max-w-prose text-base">
                Take control of your code review workflow with our powerful
                dashboard. Easily track, prioritize and respond to feedback
                while highlighting your team's development excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
