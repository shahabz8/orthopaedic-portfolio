import { Icon } from "@iconify/react";
import { useRef, useState } from "react";
import useFadeInAnimation from "../../customHooks/FadeInAnimation";
import FilledButton from "../../components/filledButton";
import { HeartOutlinedIcon } from "../../assets/exportAssets";

const ContactSection = () => {
  const leftContainerRef = useRef();
  const rightContainerRef = useRef();
  const [loading, setLoading] = useState(false);

  // Your email address where submissions should go
  const myEmail = "shaikhaslamali786@gmail.com";

  useFadeInAnimation(leftContainerRef, {
    top: "70%",
    direction: "x",
    direction_val: -80,
  });
  useFadeInAnimation(rightContainerRef, {
    top: "70%",
    direction: "x",
    direction_val: 80,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const userEmail = formData.get("email");

    formData.append("_replyto", userEmail);

    formData.append("_subject", "New Appointment Request - Dr. Ortho Care");

    formData.append(
      "_autoresponse",
      "Thank you for contacting Dr. Nasir Hussain. We have received your appointment request and will get back to you shortly to confirm details."
    );

    formData.append("_captcha", "true");

    formData.append("_template", "table");

    formData.append("_next", window.location.href);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${myEmail}`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setLoading(false);
        alert(
          "Message Sent Successfully! Please check your email for a confirmation."
        );
        e.target.reset();
      } else {
        setLoading(false);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  return (
    <section className="py-10" id="Contact">
      <div className="grid lg:grid-cols-2 gap-7 mx-auto w-[90%] items-center">
        {/* Left Content */}
        <div className="relative font-[battambang] text-xl" ref={leftContainerRef}>
        <HeartOutlinedIcon className="absolute -z-1 bottom-full right-[90%] -rotate-25 h-20 fadeInAnim"/>
        <HeartOutlinedIcon className="absolute -z-1 top-full right-0 rotate-25 h-20 fadeInAnim"/>
          <h3 className="font-bold text-3xl text-[#0E5B81] fadeInAnim">
            Get In Touch
          </h3>
          <h1 className="text-5xl fadeInAnim">
            Your Path to Pain-Free Movement Starts Here.
          </h1>
          <p className=" fadeInAnim">
            Fill out the form to request an appointment or ask a question, and
            our team will get back to you shortly to confirm.
          </p>
          <div className="mt-10 grid gap-5">
            <p className="flex items-start fadeInAnim">
              <Icon icon="mdi:location" className="text-3xl" /> Address Shop No.
              1, Wellness Avenue, near City Hospital, Thane West, Thane,
              Maharashtra 400601
            </p>
            <p className="flex items-center fadeInAnim">
              <Icon icon="mdi-light:phone" /> Phone +91 91234 56789
            </p>
            <p className="fadeInAnim">✉️ Email contact@drorthocare.com</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="w-[80%] mx-auto lg:mx-0" ref={rightContainerRef}>
          <div className="shadow-2xl/40 relative bg-white rounded-2xl z-1 before:absolute before:w-full before:h-full before:rounded-2xl before:bg-white before:-z-5 after:absolute after:-z-10 after:w-full after:h-full after:border-4 after:border-[#48CEF3] after:inset-0 after:translate-6 after:rounded-2xl fadeInAnim after:fadeInAnim">
            <form
              onSubmit={handleSubmit}
              className="grid gap-3 rounded-2xl p-5 items-center justify-center font-[battambang] text-base"
            >
              <div className="grid grid-cols-2 gap-5 mx-auto">
                <label htmlFor="name" className="grid w-full gap-1">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    id="name"
                    required
                    className="text-sm rounded-full px-2 py-1 bg-[#5dc3df8c] inset-shadow-sm w-full"
                  />
                </label>
                <label htmlFor="phone" className="grid w-full gap-1">
                  Phone
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    id="phone"
                    required
                    className="text-xm rounded-full px-2 py-1 bg-[#5dc3df8c] inset-shadow-sm w-full"
                  />
                </label>
              </div>

              <label htmlFor="email" className="grid mx-auto w-full gap-1">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  id="email"
                  required
                  className="text-xm rounded-full px-2 py-1 bg-[#5dc3df8c] inset-shadow-sm w-full"
                />
              </label>

              <label htmlFor="subject" className="grid mx-auto w-full gap-1">
                Subject
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  id="subject"
                  required
                  className="text-xm rounded-full px-2 py-1 bg-[#5dc3df8c] inset-shadow-sm w-full"
                />
              </label>

              <label htmlFor="message" className="grid mx-auto w-full gap-1">
                Message
                <textarea
                  name="message"
                  placeholder="Message"
                  id="message"
                  rows={7}
                  required
                  className="text-xm rounded-2xl px-2 py-1 bg-[#5dc3df8c] inset-shadow-sm w-full"
                />
              </label>

              <input
                type="hidden"
                name="_autoresponse"
                value={
                  "Thank you for contacting Dr. Nasir Hussain. We have received your appointment request and will get back to you shortly to confirm details."
                }
              />
              <input
                type="text"
                name="_honey"
                style={{ display: "none" }}
              ></input>
              <input type="hidden" name="_captcha" value="true" />

              <div className="w-full flex justify-center mt-2">
                <button type="submit" disabled={loading} className="w-full">
                  <FilledButton
                    text={loading ? "Sending..." : "Submit"}
                    displayArrow={false}
                  />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
