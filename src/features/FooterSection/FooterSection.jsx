import { Icon } from "@iconify/react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  NHLogo,
  YoutubeIcon,
} from "../../assets/exportAssets";

function FooterSection() {
  return (
    <section className="bg-[#0A1933] text-white">
      <div className="w-10/12 grid lg:flex mx-auto pt-15 gap-10">
        <div className="grid gap-15 h-fit w-full">
          <div className="flex items-center gap-2 h-fit w-max">
            <NHLogo className="bg-white rounded-xl h-15 w-15 pr-2"></NHLogo>
            <div className="grid">
              <span className="font-[battambang] text-xl leading-4">
                DocnaS Clinic
              </span>
              <span className="font-[allura] text-base">
                Dr. Nasir Hussain — Orthopaedic Surgeon
              </span>
            </div>
          </div>
          <p className="font-[inter] font-semibold text-base h-fit">
            Consultant, Orthopaedic Surgeon, Joint Replacement, Preservation,
            Sports, Medicine & Complex Trauma Specialist
          </p>
          <div className={`hidden lg:grid h-fit gap-4`}>
            <span className="font-[inter] text-xl font-semibold">
              Follow Us{" "}
            </span>
            <hr className="w-11/12" />
            <div className={`flex w-11/12 justify-between `}>
              <div className="relative h-fit">
                <div className="absolute bg-[#0C1C3A] w-full h-full mix-blend-lighten rounded-lg"></div>
                <FacebookIcon className="h-12 w-12"></FacebookIcon>
              </div>
              <div className="relative h-fit">
                <div className="absolute bg-[#0C1C3A] w-full h-full mix-blend-lighten rounded-lg"></div>
                <InstagramIcon className="h-12 w-12"></InstagramIcon>
              </div>
              <div className="relative h-fit">
                <div className="absolute bg-[#0C1C3A] w-full h-full mix-blend-lighten rounded-lg"></div>
                <LinkedInIcon className="h-12 w-12"></LinkedInIcon>
              </div>
              <div className="relative h-fit">
                <div className="absolute bg-[#0C1C3A] w-full h-full mix-blend-lighten rounded-lg"></div>
                <YoutubeIcon className="h-12 w-12"></YoutubeIcon>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <span className="relative font-[inter] font-semibold text-xl after:absolute after:w-9/12 after:h-full after:border-b-4 after:right-0 after:mt-2">
            Contact Details
          </span>
          <div className="grid gap-5 mt-10 font-[battambang]">
            <span className="">
              <span className="flex items-center gap-2">
                <Icon icon="mdi:location" className="text-xl"></Icon> Address:
              </span>
              <span className="text-base">
                Shop No. 1, Wellness Avenue, near City Hospital, Thane West,
                Thane, Maharashtra 400601
              </span>
            </span>
            <span className="flex items-center text-base">
              <Icon icon="mdi-light:phone"></Icon> Phone: +91 91234 56789
            </span>
            <span className="flex items-center text-base">
              ✉️ Email: contact@drorthocare.com{" "}
            </span>
            <span className="grid w-fit font-[inter] font-semibold">
              🕜 Timing: Mon & Sat: 10am - 9pm
              <span className="text-right">(By Appointment)</span>
            </span>
          </div>
        </div>
        <div className="grid h-fit gap-10">
          <span className="relative w-fit font-[inter] font-semibold text-xl after:absolute after:w-9/12 after:h-full after:border-b-4 after:right-0 after:mt-2">
            Quick Links
          </span>
          <ul className="list-disc pl-4 grid gap-3 ">
            <li><a href="#Home">Home</a></li>
            <li><a href="#About">About Us</a></li>
            <li><a href="#WhyUs">Why Us</a></li>
            <li><a href="#Contact">Contact Us</a></li>
            <li><a href="#Services">Our Services</a></li>
            <li><a href="#Testimonials">Testimmonials</a></li>
            <li><a href="#FAQs">FAQs</a></li>
          </ul>
        </div>
        <div className="grid w-full h-fit gap-10">
          <span className="relative h-fit w-fit font-[inter] font-semibold text-xl after:absolute after:w-9/12 after:h-full after:border-b-4 after:right-0 after:mt-2">
            Make Appointment
          </span>
          <div className="flex p-5 rounded-2xl items-center bg-[#0F5B81] w-full h-fit gap-2">
            <Icon
              icon="mdi:phone"
              className="bg-[#48CEF3] text-5xl p-2 rounded-lg"
            ></Icon>
            <div className="grid">
              <span className="font-[inter] font-semibold text-lg">
                Call Us
              </span>
              <span className="font-[battambang] font-bold text-xl">
                +91 91234 56789
              </span>
            </div>
          </div>
          <span
            className={`font-[inter] font-semibold text-sm hidden lg:block`}
          >
            Consultant, Orthopaedic Surgeon, Joint Replacement, Preservation,
            Sports, Medicine & Complex Trauma Specialist
          </span>
        </div>
        <div className={`lg:hidden grid h-fit gap-4`}>
          <span className="font-[inter] text-xl font-semibold">Follow Us </span>
          <hr className="w-11/12" />
          <div className={`flex w-11/12 justify-between `}>
            <div className="relative h-fit">
              <div className="absolute bg-[#0C1C3A] w-full h-full mix-blend-lighten rounded-lg"></div>
              <FacebookIcon className="h-12 w-12"></FacebookIcon>
            </div>
            <div className="relative h-fit">
              <div className="absolute bg-[#0C1C3A] w-full h-full mix-blend-lighten rounded-lg"></div>
              <InstagramIcon className="h-12 w-12"></InstagramIcon>
            </div>
            <div className="relative h-fit">
              <div className="absolute bg-[#0C1C3A] w-full h-full mix-blend-lighten rounded-lg"></div>
              <LinkedInIcon className="h-12 w-12"></LinkedInIcon>
            </div>
            <div className="relative h-fit">
              <div className="absolute bg-[#0C1C3A] w-full h-full mix-blend-lighten rounded-lg"></div>
              <YoutubeIcon className="h-12 w-12"></YoutubeIcon>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-15 opacity-50" />
      <div className="grid">
        <span className="my-4 font-[inter] font-semibold text-sm text-right mr-10">
          Copyright ©️ 2025 All rights reserved.
        </span>
      </div>
    </section>
  );
}

export default FooterSection;
