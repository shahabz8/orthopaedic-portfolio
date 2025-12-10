import { useRef } from "react";
import {
  BoneDCIcon,
  BoneFractureIcon,
  HipBoneIcon,
  KneeCircleIcon,
  MedicalCareHandsIcon,
  OurServicesBGURL,
  ReportIcon,
  RunningIcon,
} from "../../assets/exportAssets";
import useFadeInAnimation from "../../customHooks/FadeInAnimation";

const ServicesSection = () => {
  const services = [
    {
      icon: KneeCircleIcon,
      title: "Joint Replacement",
      content:
        "Hip, knee & shoulder replacements with minimally invasive approaches.",
    },
    {
      icon: BoneFractureIcon,
      title: "Trauma & Fracture Care",
      content: "Acute fracture fixation, polytrauma & rehabilitation.",
    },
    {
      icon: RunningIcon,
      title: "Sports Injuries",
      content: "ACL, meniscal repairs and athlete-specific rehab.",
    },
    {
      icon: BoneDCIcon,
      title: "Arthroscopy",
      content:
        "Minimally invasive surgery to diagnose and treat joint problems for a faster recovery.",
    },
    {
      icon: HipBoneIcon,
      title: "Pediatric Orthopaedics",
      content: "Growth plate care & congenital conditions",
    },
    {
      icon: ReportIcon,
      title: "Second Opinion",
      content: "Detailed case review and scan interpretation.",
    },
  ];

  const containerRef = useRef();
  const iconRef = useRef();

  useFadeInAnimation(containerRef, {
    top: "60%",
    direction: "y",
    direction_val: 80,
  });
  useFadeInAnimation(iconRef, {
    top: "60%",
    direction: "x",
    direction_val: -50,
  });

  return (
    <section className="relative w-full lg:-mt-40 scroll-smooth" id="Services">
      <img
        src={OurServicesBGURL}
        alt=""
        className="absolute inset-0 -z-20 -mt-20 w-screen h-[130%] lg:h-[120%]"
      />

      <div className="absolute inset-0" ref={iconRef}>
        {/* Background glow */}
        <div className="absolute -right-[25%] top-[50%]  lg:top-1/4 size-[50%] rounded-full bg-radial radial-[at_50%_75%] from-[#88CEC2] to-[#0F5B81] to-90% blur-3xl opacity-40"></div>
        <div className="absolute -left-[25%] top-[50%]  lg:top-1/4 size-[50%] rounded-full bg-radial radial-[at_50%_75%] from-[#88CEC2] to-[#0F5B81] to-90% blur-3xl opacity-40"></div>

        {/* Background icon */}
        <MedicalCareHandsIcon className="absolute h-50 w-50 top-[15%] left-[5%] -rotate-30 mix-blend-soft-light fadeInAnim" />
      </div>

      <div className="lg:p-50 relative z-10" ref={containerRef}>
        <h2 className="font-[montserrat] font-bold text-[2.5rem] underline decoration-4 text-shadow-lg/20 text-center mb-10 text-white fadeInAnim">
          Our Services
        </h2>
        <div className="flex flex-col items-center lg:grid lg:grid-cols-3 gap-4">
          {services.map((e) => {
            return (
              <div
                className="relative group overflow-clip
              bg-white 
              p-6 w-[90%] lg:w-full rounded-2xl h-fit lg:h-full 
              fadeInAnim 
              before:transition-all before:ease-in-out before:duration-500 before:absolute before:w-full before:h-0 before:bottom-0 before:left-0 before:-z-1 hover:before:h-full 
              before:bg-[#072c3f]
              hover:shadow-lg/50 hover:shadow-white"
              >
                <e.icon className="w-16 h-16 mb-3 text-[#09A1CB]"></e.icon>
                <e.icon className="absolute w-32 h-32 mb-3 text-[#09A1CB] -bottom-40 right-0 opacity-0 group-hover:bottom-0 z-100 transition-all ease-in-out duration-300 group-hover:opacity-15 mix-blend-luminosity"></e.icon>

                <h5 className="text-2xl font-[inria] font-bold text-[#09A1CB] mb-1">
                  {e.title}
                </h5>
                <p className="text-lg font-[inria] leading-5 group-hover:text-white duration-200">
                  {e.content}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
