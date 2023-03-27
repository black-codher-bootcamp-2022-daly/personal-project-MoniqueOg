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
      <button ref={accessibilityBtn} onClick={"handleOverlay"} id="accessibility-btn" aria-label="Accessibility options">
        Accessibility
      </button>

      <div
        ref={accessibilityOverlay}
        id="accessibility-overlay"
        aria-hidden="true"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "none",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div id="accessibility-options" style={{ backgroundColor: "#fff", padding: "1rem", borderRadius: "5px", boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)", maxWidth: "90%", maxHeight: "90%", overflow: "auto" }}>
          <div>
            <h2>Color options:</h2>
            <div className="color-option" id="color-blind-1" style={{ backgroundColor: "red" }}>Red</div>
            <div className="color-option" id="color-blind-2" style={{ backgroundColor: "green" }}>Green</div>
            <div className="color-option" id="color-blind-3" style={{ backgroundColor: "blue" }}>Blue</div>
            <div className="color-option" id="color-blind-4" style={{ backgroundColor: "yellow" }}>Yellow</div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h2>Font options:</h2>
            <div className="font-option" style={{ fontFamily: "sans-serif" }}>Sans-serif</div>
            <div className="font-option" style={{ fontFamily: "serif" }}>Serif</div>
            <div className="font-option" style={{ fontFamily: "monospace" }}>Monospace</div>
          </div>
          <button style={{ marginTop: "1rem" }} onClick={() => accessibilityOverlay.current.style.display = "none"}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;
