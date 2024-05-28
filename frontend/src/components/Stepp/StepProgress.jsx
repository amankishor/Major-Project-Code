import React, { useState } from "react";
import "./Step.css";

const StepProgressBar = ({ steps }) => {
  const [activeStep, setActiveStep] = useState(null);

  const handleStepClick = (index) => {
    setActiveStep(index);
  };

  return (
    <div className="step-progress-bar">
      {steps.map((step, index) => (
        <div
          key={index}
          className={`step ${index === activeStep ? "active" : ""}`}
          onClick={() => handleStepClick(index)}
        >
          <div className="step-number">{index + 1}</div>
          <div className="step-description">{step}</div>
          {index < steps.length - 1 && <div className="line"></div>}
        </div>
      ))}
    </div>
  );
};

const steps = [
  "Create an account on AIRZEN'S website",
  "Go to services",
  "Select the CT Scan Images",
  "Wait for the result",
  "Browse through personalized healthcare solutions",
];

export default function App() {
  return (
    <div className="App">
      <StepProgressBar steps={steps} />
    </div>
  );
}
