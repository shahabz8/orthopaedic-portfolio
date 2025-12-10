import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const TrialButton = () => {
  const containerRef = useRef();

  const buttonRef = useRef();
  const leftBar = useRef();
  const rightBar = useRef();

  const tlRef = useRef();

  // contextSafe is needed for creating GSAP interactions that react to events
  const { contextSafe } = useGSAP(
    () => {
      // 1. The Guard Clause:
      // If GSAP is currently animating this specific element, STOP here.
      if (gsap.isTweening(buttonRef.current)) {
        return;
      }

      tlRef.current = gsap
        .timeline({ paused: true })
        .to([leftBar.current, rightBar.current], {
          x: 0,
          duration: 0.5,
          ease: "power2.inOut",
        })
        .to([leftBar.current, rightBar.current], {
          height: 100,
          duration: 0.5,
          ease: "power2.inOut",
        });
    },
    { scope: containerRef }
  );

  // 3. Simple Control Functions
  const handleMouseEnter = contextSafe(() => {
    tlRef.current.play();
  });

  const handleMouseLeave = contextSafe(() => {
    tlRef.current.reverse();
  });

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      ref={containerRef}
    >
      <div className="relative rounded-full overflow-hidden">
        <div
          className="absolute inset-0 w-1/2 h-1 bg-blue-900 -translate-x-full -z-10"
          ref={leftBar}
        ></div>
        <button
          ref={buttonRef}
          className="border rounded-full px-10 py-2 cursor-pointer border-black hover:text-white duration-1000 hover:border-transparent transition-all ease-in-out"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Submit
        </button>
        <div
          className="absolute bottom-0 right-0 w-1/2 h-1 bg-blue-900 translate-x-full -z-10 "
          ref={rightBar}
        ></div>
      </div>
    </div>
  );
};

export default TrialButton;
