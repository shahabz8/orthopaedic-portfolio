import { useRef } from "react";
import {
  HeroBGURL,
  KneeCrescentIcon,
  KneeHexIcon,
  KneePlusIcon,
} from "../../assets/exportAssets.js";
import FilledButton from "../../components/filledButton.jsx";
import OutlinedButton from "../../components/outlinedButton.jsx";
import useBackgroundIconAnimation from "../../customHooks/BackgroundIconAnimation.jsx";
import useTypewriterEffectAnimation from "../../customHooks/TypewriterEffectAnimation.jsx";
import useNumberIncrementAnimation from "../../customHooks/NumberIncrementAnimation.jsx";


const HeroSection = () => {
  const HeroSubText = `
    Orthopaedic Surgeon • Joint Replacement • Trauma & Sports Injuries.<br/>
    Fellowship-trained with decades of experience delivering excellent surgical outcomes.
  `;

  const iconContainerRef = useRef();
  const textRef = useRef();
  const cursorRef = useRef();
  const statsContainerRef = useRef();

  useBackgroundIconAnimation(iconContainerRef);
  useTypewriterEffectAnimation(HeroSubText, cursorRef, textRef);
  useNumberIncrementAnimation(statsContainerRef);

  return (
    <section id="Home" className="relative w-full pt-20 pb-28">
      <img src={HeroBGURL} className="w-full absolute inset-0 -z-20 h-[140%]" />
      <div
        className="absolute inset-0 -z-15 mix-blend-multiply"
        ref={iconContainerRef}
      >
        <KneeHexIcon
          className="absolute h-15 xl:h-25 w-fit opacity-85 rotate-25 top-[2.5%] left-[2.5%] leftIconAnim"
        ></KneeHexIcon>
        <KneeCrescentIcon
          className="absolute h-14 xl:h-24 w-fit opacity-55 top-[50%] left-[1%] leftIconAnim"
        ></KneeCrescentIcon>
        <KneeHexIcon
          className="absolute h-15 xl:h-25 w-fit opacity-85 rotate-25 top-[90%] left-[7%] leftIconAnim"
        ></KneeHexIcon>
        <KneePlusIcon
          className="absolute h-15 xl:h-30 w-fit opacity-55 -rotate-25 top-[40%] left-[12%] leftIconAnim"
        ></KneePlusIcon>
        <KneeHexIcon
          className="absolute h-15 xl:h-25 w-fit opacity-85 rotate-25 -top-[15%] left-[25%] leftIconAnim"
        ></KneeHexIcon>
        <KneePlusIcon
          className="absolute h-15 xl:h-30 w-fit opacity-85 -rotate-25 top-[2%] right-[25%] rightIconAnim"
        ></KneePlusIcon>
        <KneePlusIcon
          className="absolute h-15 xl:h-35 w-fit opacity-85 -rotate-25 -top-[20%] -right-[4%] rightIconAnim"
        ></KneePlusIcon>
        <KneeHexIcon
          className="absolute h-15 xl:h-25 w-fit opacity-85 rotate-25 top-[25%] right-[10%] rightIconAnim"
        ></KneeHexIcon>
        <KneeHexIcon
          className="absolute h-15 xl:h-25 w-fit opacity-85 rotate-25 bottom-[15%] right-0 rightIconAnim"
        ></KneeHexIcon>
        <KneeCrescentIcon
          className="absolute h-15 xl:h-28 w-fit opacity-55 bottom-[1%] right-[30%] rightIconAnim"
        ></KneeCrescentIcon>
      </div>

      {/* Foreground Content */}
      <div className="grid justify-center max-w-10/12  xl:max-w-4xl text-center gap-y-7 mx-auto text-white">
        <h1 className="text-center font-[battambang] text-5xl font-black">
          Dr. Nasir Hussain
        </h1>
        <h3 className="font-[battambang] font-bold text-xl leading-7 xl:leading-10">
          <span className="typewriter-text" ref={textRef}></span>
          <span
            className="typewriter-cursor inline-block text-2xl font-thin"
            ref={cursorRef}
          >
            |
          </span>
        </h3>

        {/* button row */}
        <div
          className="grid xl:grid-flow-col xl:grid-cols-12 justify-center gap-6 z-5
          "
        >
          <FilledButton
            colSpan="xl:col-start-2 xl:col-span-6"
            text={"Book Appointment"}
            scrollToId={"#Contact"}
          />
          <OutlinedButton text={"View Services"} colSpan={"xl:col-span-4"} scrollToId={"#Services"}/>
        </div>

        {/* stats */}
        <div
          className="grid grid-cols-2 lg:grid-cols-3 mx-auto  justify-center gap-12 font-bold font-[battambang] text-4xl flex-col xl:flex-row"
          ref={statsContainerRef}
        >
          <h2 className="grid">
            <span>
              <span className="data">25</span>+
            </span>
            <span className="text-sm">Years Experience</span>
          </h2>
          <h2 className="grid">
            <span className="data">12400</span>
            <span className="text-sm">Happy Patients</span>
          </h2>
          <h2 className="grid col-span-2 lg:col-span-1">
            <span className="data">4200</span>
            <span className="text-sm">Surgeries</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
