import React, { useState, useEffect, useRef, useCallback } from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "919217418481";
  const message = "Hello NobleCore Recruitment, I'm interested in your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Position state (bottom-right by default)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [initialPos, setInitialPos] = useState({ x: 0, y: 0 });
  const [hasMoved, setHasMoved] = useState(false);
  
  const buttonRef = useRef(null);

  const handleStart = (clientX, clientY) => {
    setIsDragging(true);
    setHasMoved(false);
    setDragStart({ x: clientX, y: clientY });
    setInitialPos({ x: position.x, y: position.y });
  };

  const handleMove = useCallback((clientX, clientY) => {
    if (!isDragging) return;
    
    const dx = clientX - dragStart.x;
    const dy = clientY - dragStart.y;
    
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      setHasMoved(true);
    }
    
    setPosition({
      x: initialPos.x + dx,
      y: initialPos.y + dy
    });
  }, [isDragging, dragStart, initialPos]);

  const handleEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Mouse Events
  const onMouseDown = (e) => handleStart(e.clientX, e.clientY);
  
  // Touch Events
  const onTouchStart = (e) => handleStart(e.touches[0].clientX, e.touches[0].clientY);

  useEffect(() => {
    const onMouseMove = (e) => handleMove(e.clientX, e.clientY);
    const onTouchMove = (e) => handleMove(e.touches[0].clientX, e.touches[0].clientY);
    const onEnd = () => handleEnd();

    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onEnd);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onEnd);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onEnd);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onEnd);
    };
  }, [isDragging, handleMove, handleEnd]);

  const handleClick = (e) => {
    if (hasMoved) {
      e.preventDefault();
      return;
    }
    // Logic to open WhatsApp is handled by the anchor tag if we don't prevent default
  };

  return (
    <div 
      className={`whatsapp-float-container ${isDragging ? "dragging" : ""}`}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        cursor: isDragging ? "grabbing" : "grab"
      }}
      ref={buttonRef}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      <a
        href={whatsappUrl}
        className="whatsapp-float shadow-lg"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        onClick={handleClick}
        onDragStart={(e) => e.preventDefault()} // Prevent default ghost image
      >
        <div className="whatsapp-pulse"></div>
        <svg
          viewBox="0 0 24 24"
          width="28"
          height="28"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          className="whatsapp-icon"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793 0-.853.448-1.273.607-1.446.159-.173.346-.217.462-.217.116 0 .231.001.332.005.109.004.258-.041.405.314.159.386.541 1.321.583 1.407.042.086.069.186.012.298-.057.112-.086.182-.172.282-.086.1-.182.224-.26.3-.094.095-.192.197-.082.385.11.188.489.807 1.05 1.307.72.645 1.321.846 1.51.939.188.093.298.077.405-.047.107-.124.462-.541.585-.722.124-.181.249-.152.417-.09.168.063 1.066.503 1.25.594.184.091.307.136.353.213.047.077.047.445-.097.85zM12.029 3c-4.991 0-9.039 4.049-9.039 9.038 0 1.591.411 3.15 1.194 4.526l-1.184 4.336 4.432-1.163c1.332.727 2.828 1.111 4.35 1.112h.004c4.989 0 9.038-4.049 9.038-9.038 0-4.989-4.048-9.038-9.038-9.038zm0 16.292c-1.42 0-2.812-.382-4.028-1.106l-.288-.172-2.619.686.699-2.553-.188-.3c-.793-1.267-1.21-2.73-1.21-4.234 0-4.076 3.315-7.391 7.392-7.391 4.074 0 7.389 3.315 7.389 7.391.002 4.074-3.312 7.39-7.389 7.39h-.002z" />
        </svg>
      </a>
    </div>
  );
};

export default WhatsAppButton;
