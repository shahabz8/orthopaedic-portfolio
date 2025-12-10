import { useRef } from "react";
import {
  DoctorPlaceHolder,
  AboutTopBG,
  AboutBottomBG,
} from "../../assets/exportAssets";
import useFadeInAnimation from "../../customHooks/FadeInAnimation";

const AboutSection = () => {
  const containerRef = useRef();
  useFadeInAnimation(containerRef, {
    top: "80%",
    direction: "y",
    direction_val: 80,
  });

  return (
    <section className="relative -mt-30 lg:-mt-40" id="About">
      <AboutTopBG
        className="w-full block h-auto object-cover lg:h-60"
        style={{ filter: "drop-shadow(0 -20px 15px black)" }}
      />
      <div className="relative bg-white -mt-1 py-10">
        <div
          className="relative z-10 flex flex-wrap gap-10 items-center justify-center pt-10 lg:pt-0"
          ref={containerRef}
        >
          <div className="text-right w-fit flex flex-col items-center lg:items-end fadeInAnim">
            <div className="relative w-[70%] lg:w-full">
              <DoctorPlaceHolder className="drop-shadow-lg w-full h-fit"></DoctorPlaceHolder>
              <DoctorPlaceHolder className="opacity-30 absolute -z-1 top-6 left-6 w-full h-fit"></DoctorPlaceHolder>
            </div>
            <h2 className="text-xl lg:text-3xl lg:-mt-1 font-[battambang] mt-4">
              Dr. Nasir Hussain
            </h2>
            <p className="font-[inria] text-sm lg:text-lg">
              Orthopaedic Surgeton • Fellowship (Fortis Gurgaon)
            </p>
          </div>
          <div className="w-full p-4 lg:p-0 lg:w-min fadeInAnim">
            <div className="pb-7 font-[montserrat] w-max">
              <h1 className="font-bold text-3xl lg:text-5xl relative grid w-fit after:absolute after:border-2 after:rounded-2xl after:w-[60%] after:right-0 after:-bottom-2">
                About Dr. Hussain
              </h1>
            </div>
            <p className="font-normal grid lg:pt-6 text-left font-[battambang] text-xl">
              <span className="mb-4">
                With extensive experience across leading hospitals like{" "}
                <span className="font-bold">AIIMS, New Delhi, Medanta, </span>
                and <span className="font-bold">Apollo Spectra,</span> Dr. Nasir
                Hussain is a trusted name in orthopaedics. His expertise covers
                advanced trauma care, complex joint replacements, and minimally
                invasive procedures.
              </span>
              <span>
                Dr. Hussain is committed to providing compassionate care with
                evidence-based treatments that deliver lasting results.
              </span>
            </p>
          </div>
        </div>

        {/* Background glow */}
        <div className="absolute -right-[25%] top-[50%]  lg:top-1/4 size-[50%] rounded-full bg-radial radial-[at_50%_75%] from-[#88CEC2] to-white to-90% blur-3xl opacity-70"></div>
        <div className="absolute -left-[25%] top-1/4 size-[50%] rounded-full bg-radial radial-[at_50%_75%] from-[#95E4FA] to-white to-90% blur-3xl opacity-70"></div>
        <div className="absolute left-[20%] lg:left-[10%] -top-[1%] size-[50%] rounded-full bg-radial radial-[at_50%_75%] from-[#8193E5] to-white to-90% blur-3xl opacity-70"></div>
      </div>
      <AboutBottomBG
        className="relative w-full h-auto -z-2 lg:h-50"
        style={{ filter: "drop-shadow(0 30px 15px black)" }}
      />
    </section>
  );
};

export default AboutSection;
