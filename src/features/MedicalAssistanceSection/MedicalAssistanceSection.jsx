import { Icon } from "@iconify/react";
import {
  MedicalAssistBottomBG,
  MedicalAssistTopBG,
} from "../../assets/exportAssets";
import { useRef } from "react";
import useFadeInAnimation from "../../customHooks/FadeInAnimation";

function MedicalAssistanceSection() {
  const medicalAssistance = [
    {
      backgroundColor: "bg-white",
      iconName: "healthicons:doctor-male-outline",
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Assured Outcomes",
      pos: "",
      content:
        "Our highly skilled orthopaedic team ensures you receive the most effective treatment for fractures, joint issues, and musculoskeletal conditions. We focus on delivering predictable, long-lasting surgical and non-surgical outcomes.",
      cta: "View Results",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#000E44]",
      iconName: "material-symbols-light:ecg-heart-outline-sharp",
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Skilled Surgeon",
      pos: "lg:mt-7 lg:-mb-7",
      content:
        "With advanced training from leading institutes, Dr. Nasir Hussain brings years of specialized experience in joint replacement, trauma care, and sports injuries—ensuring expert, evidence-based treatment.",
      cta: "See Our Surgeon",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#48CEF3]",
      iconName: "hugeicons:appointment-01",
      size: "text-5xl",
      iconColor: "text-white",
      title: "Make an Appointment",
      pos: "",
      content:
        "We are honoured to be entrusted with your care. Schedule your consultation and take the first step toward a pain-free, active life.",
      cta: "Book Appointment",
    },
    {
      backgroundColor: "bg-white",
      iconName: "healthicons:virus-research-alt-outline",
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Latest Techniques",
      pos: "",
      content:
        "We use the latest arthroscopy techniques, minimally invasive procedures, and modern orthopaedic implants to provide faster recovery and superior outcomes.",
      cta: "Explore Services",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#000E44]",
      iconName: "la:medal",
      size: "text-5xl",
      iconColor: "text-[#09A1CB]",
      title: "Scientific Distinction",
      pos: "lg:mt-7 lg:-mb-7",
      content:
        "We stay updated with the newest research in orthopaedics, regularly engaging in scientific learning to bring world-class treatment techniques to our patients.",
      cta: "Scientific Excellence",
    },
    {
      textColor: "text-white",
      backgroundColor: "bg-[#48CEF3]",
      iconName: "fa-solid:people-arrows",
      size: "text-5xl",
      iconColor: "text-white",
      title: "Patient Satisfaction",
      pos: "",
      content:
        "Your recovery and comfort are our top priority. We take pride in consistent, high patient satisfaction—reflecting our commitment to compassionate, quality care.",
      cta: "Call Us",
    },
  ];

  const containerRef = useRef();

  useFadeInAnimation(containerRef, {
    top: "70%",
    direction: "y",
    direction_val: 80,
  });

  return (
    <section className="relative flex flex-col gap-0 -mt-20" id="MedicalAssistance">
      <MedicalAssistTopBG className="w-full" />
      <div className="bg-[#0E5B81] -my-1 py-10" ref={containerRef}>
        <h2 className="font-[montserrat] text-4xl font-bold underline decoration-4 text-center text-white fadeInAnim">
          Our Medical Assistance
        </h2>
        <div className="grid lg:grid-cols-3 gap-7 gap-x-0 py-7 w-10/12 mx-auto">
          {medicalAssistance.map((e) => {
            return (
              <div
                className={`relative group w-11/12 drop-shadow-xl/20 mx-auto ${e.pos} p-5 ${e.backgroundColor} fadeInAnim hover:-translate-y-4! cursor-pointer overflow-clip transition-all ease-in-out duration-500 hover:shadow-2xl/50 hover:shadow-white`}
              >
                <Icon icon={e.iconName} className={`${e.iconColor} ${e.size}`}/>
                <Icon icon={e.iconName} className={`${e.iconColor} text-9xl absolute -bottom-40 right-0 opacity-0 group-hover:bottom-0 z-100 transition-all ease-in-out duration-500 group-hover:opacity-25`}/>
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
                <button
                  className={`${
                    e.backgroundColor == "bg-[#48CEF3]"
                      ? "text-white"
                      : "text-[#09A1CB]"
                  }`}
                >
                  {e.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
      <MedicalAssistBottomBG className="w-full" />
    </section>
  );
}

export default MedicalAssistanceSection;
