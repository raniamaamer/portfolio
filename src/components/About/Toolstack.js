import React from "react";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import intelliJ from "../../Assets/TechIcons/intellij-idea.svg";

function Toolstack() {
  return (
    <div className="tech-container">
      <div className="tech-icons">
        <img src={vsCode} alt="VS Code" />
        <div className="tech-icons-text">VS Code</div>
      </div>

      <div className="tech-icons">
        <img src={intelliJ} alt="IntelliJ" />
        <div className="tech-icons-text">IntelliJ</div>
      </div>
    </div>
  );
}

export default Toolstack;
