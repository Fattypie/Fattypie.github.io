import React, { useState } from 'react';
import './DynamicButton.css'; // Import CSS file for styling

function DynamicButton() {
  const [isHovered, setIsHovered] = useState(false);

  // Function to handle mouse enter event
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // Function to handle mouse leave event
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={isHovered ? 'button-container hovered' : 'button-container'}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="button">
        {isHovered ? 'Buy Product' : null}
      </div>
    </div>
  );
}

export default DynamicButton; 