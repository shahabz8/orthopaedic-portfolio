import { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import { TestimonialBG } from "../../assets/exportAssets";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Jane Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "John Smith",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Sarah Connors",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    image: "https://i.pravatar.cc/150?img=5",
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction === 'next' ? '100%' : '-100%',
    opacity: 0,
    position: 'absolute', 
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: 'relative',
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction === 'next' ? '-100%' : '100%',
    opacity: 0,
    position: 'absolute', 
  }),
};

const swipeTransition = {
  duration: 0.6,
  ease: [0.43, 0.13, 0.23, 0.96]
};


function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  const handleNext = () => {
    setDirection('next');
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setDirection('prev');
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentData = testimonials[currentIndex];

  return (
    <section className="" id="Testimonials">
      <h1 className="text-center font-[inter] font-semibold text-4xl underline decoration-4">
        Testimonials
      </h1>
      <div className="relative flex items-center pt-20">
        <TestimonialBG className="absolute -z-10 w-full h-[120%]"></TestimonialBG>
        
        <Icon 
          icon="bxs:left-arrow" 
          className="text-5xl cursor-pointer hover:opacity-70 transition-opacity z-20" 
          onClick={handlePrev}
        />
        
        <div className="relative h-96 w-full overflow-hidden">
           <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div 
                key={currentData.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={swipeTransition}
                className="h-full w-full flex flex-col items-center py-2"
            >
              <div className="relative flex items-center justify-center">
                <div className="w-25 h-25 bg-gray-500 rounded-full overflow-hidden">
                    <img 
                        src={currentData.image} 
                        alt={currentData.name} 
                        className="w-full h-full object-cover" 
                    />
                </div>
                <div className="absolute w-28 h-28 border-3 border-dashed border-[#256583] rounded-full"></div>
              </div>
              <h3 className="text-center my-5 font-[jaldi] font-bold text-3xl">
                {currentData.name}
              </h3>
              <div className="relative w-8/12 h-40 flex">
                <p className="w-10/12 text-center mx-auto h-fit my-auto font-[inter] font-semibold lg:text-2xl text-[#045065]">
                  {currentData.text}
                </p>
                <Icon
                  icon="raphael:quote"
                  className="absolute font-[jaldi] font-bold text-xl lg:text-5xl w-fit z-10"
                >
                  "
                </Icon>
                <Icon
                  icon="raphael:quote"
                  className="absolute font-[jaldi] font-bold text-xl lg:text-5xl rotate-180 w-fit bottom-0 right-0 z-10"
                >
                  "
                </Icon>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        
        <Icon 
          icon="bxs:right-arrow" 
          className="text-5xl cursor-pointer hover:opacity-70 transition-opacity z-20" 
          onClick={handleNext}
        />
      </div>
    </section>
  );
}

export default TestimonialSection;