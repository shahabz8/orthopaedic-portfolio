import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const useNumberIncrementAnimation = (ref) => {
  useGSAP(() => {
    if (!ref.current) return;
    const items = ref.current.querySelectorAll(".data");

    gsap.from(items, {
      textContent: 0,
      duration: 4,
      ease: "power1.in",
      snap: { textContent: 1 },
      stagger: {
        onUpdate: function () {
          this.targets()[0].innerHTML = numberWithCommas(
            Math.ceil(this.targets()[0].textContent)
          );
        },
      },
    });

    function numberWithCommas(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  });
};

export default useNumberIncrementAnimation;
