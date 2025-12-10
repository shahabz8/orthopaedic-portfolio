import { useRef, useState } from "react";
import {
  Checkmark,
  HandshakeIcon,
  HeartIcon,
  SmileIcon,
  SupportIcon,
} from "../../assets/exportAssets";
import FilledButton from "../../components/filledButton";
import useWindowWidth from "../../customHooks/WindowWidth";
import useFadeInAnimation from "../../customHooks/FadeInAnimation";

const WhyUsSection = () => {
  const benefits = [
    {
      icon: HeartIcon,
      title: "Experienced Care",
      content:
        "With years of specialized training and a history of successful outcomes, we bring deep expertise to diagnose and treat a wide range of musculoskeletal conditions. We are dedicated to applying proven, advanced techniques for your care.",
      pos: "",
    },
    {
      icon: SmileIcon,
      title: "Personalized Attention",
      content:
        "You are not just another case file. We believe the most effective treatment plan is one designed specifically for you. We dedicate ample time to one-on-one consultations to understand your lifestyle, concerns, and recovery goals.",
      pos: "md:-mt-8 md:mb-8",
    },
    {
      icon: SupportIcon,
      title: "Compassionate Approach",
      content:
        "We know that living with pain can be physically and emotionally draining. Our entire team provides a supportive and empathetic environment, treating every patient with the kindness, respect, and understanding they deserve.",
      pos: "",
    },
    {
      icon: HandshakeIcon,
      title: "Trusted by Patients",
      content:
        "Our greatest achievement is the trust we've built within the Thane community. We are committed to ethical, transparent, and effective care that has made us a reliable choice for families seeking to regain their mobility and live pain-free.",
      pos: "md:-my-8 md:mb-8",
    },
  ];

  const width = useWindowWidth();
  const leftContainerRef = useRef();
  const rightContainerRef = useRef();

  useFadeInAnimation(leftContainerRef, {
    top: "70%",
    direction: "x",
    direction_val: -100,
  });
  useFadeInAnimation(rightContainerRef, {
    top: "70%",
    direction: "x",
    direction_val: 100,
  });

  return (
    <section className="w-full py-40 lg:py-10" id="WhyUs">
      {/* <div className="w-10/12 mx-auto flex items-center gap-1"> */}
      <div
        className="w-11/12 lg:w-10/12 mx-auto grid items-center xl:flex"
        ref={leftContainerRef}
      >
        <div className={`mt-15 lg:mt-0 ${width >= 1152 ? "hidden" : "block"}`}>
          <h1 className="text-5xl font-semibold text-[#0F5B81] mb-7 fadeInAnim">
            Why Choose Us
          </h1>
          <h2 className="text-4xl font-semibold text-[#2A778D] mb-7 fadeInAnim">
            What Makes Us the Right Choice for You
          </h2>
        </div>
        <div className="w-11/12 mx-auto lg:w-8/12 xl:w-6/12 font-[inter] order-2 xl:order-1 mt-10">
          <div className={`${width < 1152 ? "hidden" : "block"}`}>
            <h1 className="text-5xl font-semibold text-[#0F5B81] mb-7 fadeInAnim">
              Why Choose Us
            </h1>
            <h2 className="text-4xl font-semibold text-[#2A778D] mb-7 fadeInAnim">
              What Makes Us the Right Choice for You
            </h2>
          </div>
          <p className="text-3xl font-regular mb-5 fadeInAnim">
            We provide expert healthcare with a focus on compassion, trust and
            personalized attention.
          </p>
          <ul className="text-3xl font-regular mb-7">
            <li className="w-fit flex gap-1 items-center fadeInAnim">
              {" "}
              <Checkmark className="w-6 h-6"></Checkmark> Experienced and Caring
              Team
            </li>
            <li className="w-fit flex gap-1 items-center fadeInAnim">
              {" "}
              <Checkmark className="w-6 h-6"></Checkmark> Personalized Care for
              Every patient
            </li>
            <li className="w-fit flex gap-1 items-center fadeInAnim">
              {" "}
              <Checkmark className="w-6 h-6"></Checkmark> Dedicated to Service
              at All Stages
            </li>
          </ul>
          <div className="xl:w-[60%] fadeInAnim">
            <FilledButton text={"Book Appointment"} scrollToId={"#Contact"}/>
          </div>
        </div>
        <div
          className="md:w-10/12 lg:w-8/12 xl:w-6/12 grid md:grid-cols-2 wrap-normal gap-8 items-center justify-center lg:justify-start order-1 xl:order-2 mx-auto"
          ref={rightContainerRef}
        >
          {benefits.map((e) => {
            return (
              <div
                className={`bg-white w-70 p-4 border-[#48CEF3] border-3 ${e.pos} fadeInAnim`}
              >
                <e.icon className="w-14 h-14"></e.icon>
                <h5 className="font-[montserrat] font-bold text-xl text-[#09A1CB] my-2">
                  {e.title}
                </h5>
                <p className="font-[montserrat] font-bold text-sm text-[#0F5B81] opacity-60">
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

export default WhyUsSection;
