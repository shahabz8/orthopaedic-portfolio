import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import AnimatedWaveDouble from "../../components/AnimatedWaveDouble";
import { PlusAngularIcon, PlusIcon } from "../../assets/exportAssets";
import useFadeInAnimation from "../../customHooks/FadeInAnimation";

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What are business hours?",
      answer:
        "Our practice hours are from 9:00am to 9:00pm, Monday through Saturday at various practice locations. For booking an appointment telephonically, kindly contact on +91-91234-56789 ",
    },
    {
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment by calling our reception desk, using the online booking form on our website, or visiting any of our clinic locations directly.",
    },
    {
      question: "Do you accept insurance?",
      answer:
        "Yes, we accept major insurance providers. Please contact our support team with your policy details to verify coverage before your visit.",
    },
    {
      question: "What should I bring to my first visit?",
      answer:
        "Please bring a valid ID, your insurance card, any previous medical records or X-rays related to your condition, and a list of current medications.",
    },
    {
      question: "Are emergency services available?",
      answer:
        "We handle urgent orthopaedic cases during business hours. For life-threatening emergencies or severe trauma outside hours, please visit the nearest hospital ER.",
    },
    {
      question: "Do you offer physical therapy?",
      answer:
        "Yes, we have in-house physical therapists who work closely with our surgeons to create personalized rehabilitation plans for recovery.",
    },
    {
      question: "How long is the recovery after surgery?",
      answer:
        "Recovery time varies significantly by procedure. Minor arthroscopy might take weeks, while joint replacement can take months. Your doctor will provide a specific timeline.",
    },
    {
      question: "Can I get a second opinion?",
      answer:
        "Absolutely. We encourage patients to feel confident in their treatment plan. Our specialists are happy to review your case and provide an expert second opinion.",
    },
  ];

  const rightIconContainerRef = useRef();
  const leftIconContainerRef = useRef();

  useFadeInAnimation(leftIconContainerRef, {
    top: "70%",
    direction: "x",
    direction_val: -80,
    opacity_target: "80%",
  });
  useFadeInAnimation(rightIconContainerRef, {
    top: "70%",
    direction: "x",
    direction_val: 80,
    opacity_target: "50%",
  });

  return (
    <section className="relative py-10" id="FAQs">
      <div ref={leftIconContainerRef}>
        <PlusIcon className="absolute right-[90%] opacity-50 bottom-0 h-40 -rotate-25 fadeInAnim" />
      </div>
      <div ref={rightIconContainerRef}>
        <PlusAngularIcon className="absolute left-[85%] opacity-50 top-0 h-40 -rotate-25 fadeInAnim" />
      </div>
      <div className="absolute w-full">
        <AnimatedWaveDouble />
      </div>
      <h4 className="font-[battambang] text-xl text-center text-[#0E5B81]">
        Help & FAQs
      </h4>
      <h2 className="font-[battambang] text-2xl lg:text-4xl text-center">
        Frequently Asked Questions
      </h2>
      <div className="w-11/12 mx-auto mt-10">
        <div className="grid md:grid-cols-2 gap-5 lg:gap-10 items-start">
          {questions.map((e, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="grid bg-white rounded-4xl p-2 drop-shadow-lg/30 cursor-pointer transition-all duration-300 hover:drop-shadow-xl"
              >
                <div className="flex gap-2 items-center font-[battambang] text-xl w-full">
                  <Icon
                    icon="material-symbols:chevron-right-rounded"
                    className={`text-xl lg:text-3xl h-fit text-[#0E5B81] transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                  <h5
                    className={`${
                      isOpen ? "font-bold text-[#0E5B81]" : ""
                    } transition-colors duration-300 select-none`}
                  >
                    {e.question}
                  </h5>
                </div>
                <div
                  className={`grid ps-8 pe-2 transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <hr className="my-2 border-[#0E5B81]/20" />
                    <p className="opacity-70 text-base lg:text-lg font-[inter] leading-relaxed">
                      {e.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
