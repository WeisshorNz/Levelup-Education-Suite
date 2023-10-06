import React from "react";
// this function makes "back to top" button to scroll up when pressed

function ScrollUp() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button id="back-to-top" onClick={backToTop}>
      BACK TO TOP
    </button>
  );
}

export default ScrollUp;
