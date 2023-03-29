import React from 'react';

function Accessibility() {
  const accessibilityBtn = React.useRef(null);
  const accessibilityOverlay = React.useRef(null);

  const handleOverlay = () => {
    console.log(accessibilityOverlay.current.style.display)
    if (accessibilityOverlay.current.getAttribute("aria-hidden") === "true") {
      accessibilityOverlay.current.style.display = "flex";
      accessibilityOverlay.current.setAttribute("aria-hidden", "false");
    } else {
      accessibilityOverlay.current.style.display = "none";
      accessibilityOverlay.current.setAttribute("aria-hidden", "true");
    }
  };

  React.useEffect(() => {
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

    // accessibilityBtn.current.addEventListener("click", handleOverlay);
  }, []);

  return (
    <div>
      <button ref={accessibilityBtn} onClick={handleOverlay} id="accessibility-btn" aria-label="Accessibility options">
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
          textAlign: "center",
        }}
      >
        <div id="accessibility-options" style={{ backgroundColor: "#fff", padding: "1rem", borderRadius: "8px", boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)", maxWidth: "90%", maxHeight: "90%", overflow: "auto" }}>
          <div>
            <h2 className='header-options' style={{ color: "black" }}>Color options:</h2>

            <div className="radio-container">
              <form>

                <label>
                  <input className="color-option" id="color-blind-1" style={{ backgroundColor: "red" }} type="radio" name="radio" defaultChecked />
                  <span>Red</span>
                </label>

                <label>
                  <input className="color-option" id="color-blind-2" style={{ backgroundColor: "green" }} type="radio" name="radio" />
                  <span>Green</span>
                </label>

                <label>
                  <input className="color-option" id="color-blind-3" style={{ backgroundColor: "blue" }} type="radio" name="radio" />
                  <span>Blue</span>
                </label>

                <label>
                  <input className="color-option" id="color-blind-3" style={{ backgroundColor: "yellow" }} type="radio" name="radio" />
                  <span>Yellow</span>
                </label>

              </form>
            </div>

          </div>
          <div style={{ marginTop: "1rem" }}>
            <h2 style={{ color: "black" }}>Font options:</h2>

            <div className="radio-container">
              <form>

                <label>
                  <input className="font-option" style={{ fontFamily: "sans-serif" }} type="radio" name="radio" defaultChecked />
                  <span>Sans-serif</span>
                </label>

                <label>
                  <input className="font-option" style={{ fontFamily: "serif" }} type="radio" name="radio" />
                  <span>Serif</span>
                </label>

                <label>
                  <input className="font-option" style={{ fontFamily: "monospace" }} type="radio" name="radio" />
                  <span>Monospace</span>
                </label>

              </form>
            </div>
          </div>
          <button className="close-button" style={{ marginTop: "1rem" }} onClick={() => accessibilityOverlay.current.style.display = "none"}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default Accessibility;
