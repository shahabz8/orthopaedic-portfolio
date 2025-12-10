import { useState } from "react";
import { MailIconURL, CallIconURL } from "../../assets/exportAssets";
import LogoComponent from "../../components/logo";
import FilledButton from "../../components/filledButton";

const navMenuLinks = [
  { linkText: "Home", linkUrl: "#Home" },
  { linkText: "About Us", linkUrl: "#About" },
  { linkText: "Our Services", linkUrl: "#Services" },
  { linkText: "Why Us", linkUrl: "#WhyUs" },
  { linkText: "Assistance", linkUrl: "#MedicalAssistance" },
  { linkText: "Achievements", linkUrl: "#Achievements" },
  { linkText: "Testimonials", linkUrl: "#Testimonials" },
  { linkText: "Appointment", linkUrl: "#Appointment" },
  { linkText: "Contact Us", linkUrl: "#Contact" },
  { linkText: "FAQs", linkUrl: "#FAQs" },
];

const contactInfo = [
  { imageUrl: MailIconURL, title: "Mail Us", content: "xyz@gmail.com" },
  { imageUrl: CallIconURL, title: "Call Us", content: "+91 12345-67890" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setIsSideBarOpen(!isSideBarOpen);
  };

  // New function to handle closing menu and scrolling
  const handleNavClick = (e, linkUrl) => {
    e.preventDefault(); // Stop default anchor jump

    // 1. Close the mobile menu
    setIsOpen(false);
    setIsSideBarOpen(false);

    // 2. Handle Smooth Scroll
    const targetId = linkUrl.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="relative z-50 bg-white">
      {/* Mobile Sidebar */}
      <div
        className={`w-[75%] bg-white h-screen transition-all ease-in-out duration-500 drop-shadow-lg xl:hidden ${
          isSideBarOpen ? "" : "-translate-x-full" // Changed 10/10 to full for cleaner CSS
        } absolute`}
      >
        <div className="w-full mx-auto grid h-full items-center py-20 ps-10 ">
          {navMenuLinks.map((e, index) => {
            return (
              <a
                key={index} // Added key
                href={e.linkUrl}
                // Attached the handler here
                onClick={(event) => handleNavClick(event, e.linkUrl)}
                className="relative w-fit font-[battambang] text-lg cursor-pointer inline-block link-wipe-animation"
              >
                {e.linkText}
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Header (Logo + Hamburger) */}
      <div className="flex justify-between px-4 py-4 xl:hidden bg-white ">
        <LogoComponent height="h-10" displayLogoText={false} />
        <button
          onClick={handleClick}
          className="flex flex-col justify-center items-center cursor-pointer"
        >
          <span
            className={`bg-black block transition-all duration-300 ease-out h-1.5 w-10 rounded-sm ${
              isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"
            }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out h-1.5 w-10 rounded-sm ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`bg-black block transition-all duration-300 ease-out h-1.5 w-10 rounded-sm ${
              isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"
            }`}
          ></span>
        </button>
      </div>

      {/* Desktop View */}
      <div className="w-11/12 mx-auto hidden xl:block relative bg-white ">
        <div className="grid grid-flow-col items-center py-4">
          <LogoComponent height="h-15" displayLogoText={true} />
          <div className="flex justify-between">
            {contactInfo.map((e, index) => {
              return (
                <div key={index} className="flex items-center justify-around w-full">
                  <div className="flex items-center">
                    <img src={e.imageUrl} alt="" className="w-10 h-10" />
                    <div className="grid h-fit font-[battambang] text-base leading-4 ml-2">
                      <span className="">{e.title}</span>
                      <span className="text-[#6C6C6C]">{e.content}</span>
                    </div>
                  </div>
                  <div className="h-[120%] w-[1%] bg-[black] right-0 rounded-full opacity-30 mx-5"></div>
                </div>
              );
            })}
            <FilledButton text={"Book Appointment"} scrollToId={"#Contact"} />
          </div>
        </div>
        <hr className="opacity-30 rounded-full" />
        <div className="w-full mx-auto flex items-center justify-between py-2">
          {navMenuLinks.map((e, index) => {
            return (
              <a
                key={index}
                href={e.linkUrl}
                // Optional: Added smooth scroll to desktop links as well for consistency
                onClick={(event) => {
                    event.preventDefault();
                    const targetId = e.linkUrl.replace("#", "");
                    const element = document.getElementById(targetId);
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="relative w-fit font-[battambang] text-lg cursor-pointer link-wipe-animation"
              >
                {e.linkText}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;