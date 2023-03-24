import React from 'react';

function Accessibility() {
  const accessibilityBtn = React.useRef(null);
  const accessibilityOverlay = React.useRef(null);

  React.useEffect(() => {
    const handleOverlay = () => {
      if (accessibilityOverlay.current.getAttribute("aria-hidden") === "true") {
        accessibilityOverlay.current.style.display = "flex";
        accessibilityOverlay.current.setAttribute("aria-hidden", "false");
      } else {
        accessibilityOverlay.current.style.display = "none";
        accessibilityOverlay.current.setAttribute("aria-hidden", "true");
      }
    };

    const colorOptions = document.querySelectorAll(".color-option");
    colorOptions.forEach((option) => {
      option.addEventListener("click", () => {
        document.body.style.backgroundColor = option.style.backgroundColor;
      });
    });

    const fontOptions = document.querySelectorAll(".font-option");
    fontOptions.forEach((option) => {
      option.addEventListener("click", () => {
        document.body.style.fontFamily = option.style.fontFamily;
      });
    });

    accessibilityBtn.current.addEventListener("click", handleOverlay);

    return () => {
      accessibilityBtn.current.removeEventListener("click", handleOverlay);
    };
  }, []);

  return (
    <div>
      <button ref={accessibilityBtn} id="accessibility-btn" aria-label="Accessibility options">
        Accessibility
      </button>

      <div ref={accessibilityOverlay} id="accessibility-overlay" aria-hidden="true">
        <div id="accessibility-options">
          <div className="color-option" id="color-blind-1"></div>
          <div className="color-option" id="color-blind-2"></div>
          <div className="color-option" id="color-blind-3"></div>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;