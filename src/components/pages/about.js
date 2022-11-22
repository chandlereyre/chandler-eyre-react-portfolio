import React from "react";
import profileImage from "../../../static/assets/about/twolvefly.jpg";

export default function () {
  return (
    <div>
      <div className="content-container">
        <div className="left-side">
          <img src={profileImage} alt="profileimg"></img>
        </div>
        <div className="right-side">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
