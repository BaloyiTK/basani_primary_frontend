import { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

function ScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 bg-gray-800 text-white rounded-full p-2 focus:outline-none hover:bg-white-700"
          onClick={scrollToTop}
        >
          <FaArrowCircleUp className="h-6 w-6" />
        </button>
      )}
    </>
  );
}

export default ScrollButton;
