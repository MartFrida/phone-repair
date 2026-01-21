import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    visible && (
      <button
  onClick={scrollToTop}
  className="
    fixed bottom-24 right-6 z-50
    w-12 h-12
    bg-black text-white
    rounded-full
    flex items-center justify-center
    shadow-lg
    hover:bg-gray-800
    transition
  "
  aria-label="Scroll to top"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2.5}
    stroke="currentColor"
    className="w-6 h-6"
    strokeLinecap="round"
      strokeLinejoin="round"
  ><path d="M12 19V6" />
    <path
      
            d="M5 13l7-7 7 7"
    />
  </svg>
</button>
    )
  );
}
