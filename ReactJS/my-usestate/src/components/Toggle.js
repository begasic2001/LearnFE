import { useState } from "react";
import "./ToggleStyle.css";
const Toggle = () => {
  const [isActive, setActive] = useState(false);

  const handleActive = () => {
    setActive((prevState) => 
      !prevState
    );
  };

  return (
    <>
      <div
        className={`toggle ${isActive ? "active" : ""}`}
        onClick={handleActive}
      >
        <div className={`spinner ${isActive ? "active" : ""}`}></div>
      </div>
    </>
  );
};

export default Toggle;
