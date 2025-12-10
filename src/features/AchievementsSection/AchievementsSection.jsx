import { Icon } from "@iconify/react";
import {
  AchievementIcon,
  MedalIcon,
  MedicalCareHandsIcon,
} from "../../assets/exportAssets";
import { useRef } from "react";
import useBackgroundIconAnimation from "../../customHooks/BackgroundIconAnimation";
import useTypewriterEffectAnimation from "../../customHooks/TypewriterEffectAnimation";
import useFadeInAnimation from "../../customHooks/FadeInAnimation";
import AnimatedWaveTopTop from "../../components/AnimatedWaveTopTop";
import AnimatedWaveTopBottom from "../../components/AnimatedWaveTopBottom";
import AnimatedWaveBottom from "../../components/AnimatedWaveBottom";

const AchievementsSection = () => {
  const achievements = [
    {
      backgroundColor: "bg-white",
      iconName: "healthicons:doctor-male",
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Conditions Treated",
      content:
        "Elbow Sports Injuries Ligamentous instability Dislocations Tendinopathies Elbow Arthritis Compressive Neuropathies Bone and Joint Infections Tubercular Infection Septic Arthritis Osteomyelitis Musculo Skeletal Tumors Benign Malignant…",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#000E44]",
      pos: "lg:mt-10 lg:-mb-10",
      iconName: "fluent-emoji-high-contrast:health-worker",
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Treatments Offered",
      content:
        "Best Treatment and Surgeries Offered Dr. Kunal Aneja is known for providing the latest and most advanced treatment strategies including surgeries to ensure faster pain…",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#43b2e6]",
      iconName: "healthicons:doctor-male",
      size: "text-5xl",
      iconColor: "text-white",
      title: "Patient Information : Exercises",
      content:
        "Exercises form an integral part of any Orthopaedic treatment strategy. Your Orthopaedic Surgeon in collaboration with a Physical Therapist would advise you the best combination…",
    },
    {
      backgroundColor: "bg-white",
      iconName:"healthicons:doctor-male",    
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Patient Information: Ergonomics",
      content:
        "Know what is Ergonomics and its importance. Also find practical tips for optimising your workstation and daily life ergonomically to help sort out common body…",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#000E44]",
      pos: "lg:mt-10 lg:-mb-10",
      iconName:"healthicons:doctor-male",
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Social Work",
      content:
        "Participated in free Orthopaedics surgical camp held at Shri Anandpur Trust charitable hospital located at P.O. Shri Anandpur near Eagar, District Ashok Nagar, Madhya Pradesh…",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#43b2e6]",
      iconName: "healthicons:doctor-male",
      size: "text-5xl",
      iconColor: "text-white",
      title: "Tele Medicine and Video Consultations",
      content:
        "We offer patients the ability to have a virtual consultation with Dr. Kunal Aneja, also known as telemedicine, through which many musculoskeletal conditions can be…",
    },
    {
      backgroundColor: "bg-white",
      iconName:"healthicons:doctor-male",
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Orthopaedic Second Opinion",
      content:
        "It is very common for patients suffering from an orthopaedic condition, who want to make sure that they are making the best decision to maintain their active lifestyles, to…",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#000E44]",
      pos: "lg:mt-10 lg:-mb-10",
      iconName:"healthicons:doctor-male",
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Lectures Delivered",
      content:
        "Addressed the press conference held at Sancheti Hospital on occasion of Bone and Joint week (12th-20th October) 2014 and delivered a presentation to commemorate World…",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#43b2e6]",
      iconName: "healthicons:doctor-male",
      size: "text-5xl",
      iconColor: "text-white",
      title: "Awards, Honours & Recognitions",
      content:
        "Asia Pacific Arthroplasty Society Annual International Fellowship Award, Thailand Delhi Orthopaedic Association (D.O.A.) travelling fellowship award, AIIMS, New Delhi Young Research Investigator Award, Pune, Maharashtra…",
    },
  ];

  const achievementSubtext =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus nulla ut justo porttitor luctus. Vivamus nulla elit, dapibus et sodales eget, euismod at justo. Nunc in lorem tempus, sagittis metus ut, varius erat. Sed venenatis magna eget laoreet consequat. Quisque dictum quam eget arcu laoreet, in accumsan erat tincidunt. Proin tincidunt urna sed mi volutpat bibendum. Phasellus sit amet  ultricies sapien. Praesent tincidunt fringilla ipsum,";

  const iconContainerRef = useRef();
  const textRef = useRef();
  const cursorRef = useRef();
  const containerRef = useRef();

  useFadeInAnimation(containerRef, {
    top: "80%",
    direction: "y",
    direction_val: 80,
  });
  useBackgroundIconAnimation(iconContainerRef);
  useTypewriterEffectAnimation(achievementSubtext, cursorRef, textRef);

  return (
    <section className="relative" id="Achievement">
      {/* Background Icons And Waves */}
      <div className="absolute inset-0" ref={iconContainerRef}>
        <AchievementIcon className="absolute h-30 w-fit rotate-20 left-[10%] leftIconAnim" />
        <MedalIcon className="absolute h-40 w-fit -rotate-20 right-[10%] top-[10%] rightIconAnim" />
        <MedicalCareHandsIcon className="absolute h-90 w-fit rotate-20 right-[1%] top-[70%] rightIconAnim" />
        <div className="relative -z-10 h-full">
          <div className="absolute w-full top-[20%] md:top-[10%] 2xl:top-0">
            <AnimatedWaveTopTop />
          </div>
          <div className="absolute w-full top-[25%] 2xl:top-[22%]">
            <AnimatedWaveTopBottom />
          </div>
          <div className="absolute w-full top-[82%] 2xl:top-[70%]">
            <AnimatedWaveBottom />
          </div>
        </div>
      </div>
      <div className="py-20 w-10/12 mx-auto">
        <h1 className="font-[inter] font-semibold text-4xl text-center underline decoration-4 leading-10">
          Our Achievements
        </h1>
        <p className="font-[inter] font-semibold lg:text-2xl lg:w-8/12 text-justify lg:text-center mx-auto my-4">
          <span className="typewriter-text" ref={textRef}></span>
          <span
            className="typewriter-cursor inline-block text-2xl"
            ref={cursorRef}
          >
            |
          </span>
        </p>
        <div className="w-11/12 mx-auto">
          <div
            className="grid lg:grid-cols-3 gap-5 lg:gap-7 gap-x-0 py-7"
            ref={containerRef}
          >
            {achievements.map((e) => {
              return (
                <div
                  className={`group relative lg:w-11/12 drop-shadow-xl/20 mx-auto ${e.pos} p-5 ${e.backgroundColor} fadeInAnim cursor-pointer 
                  hover:drop-shadow-2xl/50 duration-300 hover:-translate-y-3! overflow-clip transition-all ease-in-out`}
                >
                  <Icon icon={e.iconName} className={`${e.iconColor} ${e.size}`}/>
                  <h3
                    className={`${
                      e.textColor ? e.textColor : "text-black"
                    } my-2 text-2xl font-bold font-[battambang]`}
                  >
                    {e.title}
                  </h3>
                  <p
                    className={`mb-2 line-clamp-4 text-lg font-normal ${
                      e.backgroundColor == "bg-[#48CEF3]"
                        ? "text-gray-600"
                        : e.textColor
                        ? e.textColor
                        : "text-black"
                    }`}
                  >
                    {e.content}
                  </p>
                  <Icon icon={e.iconName} className={`${e.iconColor} text-9xl absolute -bottom-40 right-0 opacity-0 group-hover:bottom-0 z-100 transition-all ease-in-out duration-500 group-hover:opacity-25 `}/>
                  <a
                    className={`${
                      e.backgroundColor == "bg-[#43b2e6]"
                        ? "text-white"
                        : "text-[#09A1CB]"
                    }`}
                  >
                    <span className="underline underline-offset-3">
                      read more
                    </span>{" "}
                    →
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
