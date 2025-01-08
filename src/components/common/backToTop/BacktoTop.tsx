import useScrollDirection from "@/hooks/sticky-header";
import React, { useRef, useEffect } from "react";
const BacktoTop = () => {
  const elementRef = useRef<HTMLDivElement>(null);
  const scrollDirection = useScrollDirection(elementRef.current);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <div ref={elementRef}>
        <button className={`scroll-top scroll-to-target ${scrollDirection === "down" ? "open" : ""
          }`}>
          <i className="fas fa-angle-up"></i>
        </button>
      </div>
    </>
  );
};

export default BacktoTop;


