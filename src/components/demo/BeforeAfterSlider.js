"use client";
import { useState } from 'react';

export default function BeforeAfterSlider({ beforeImage, afterImage }) {
  const [sliderPosition, setSliderPosition] = useState(50);

  return (
    <div className="slider-container" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '16px', cursor: 'ew-resize', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
      {/* After Image (Background) */}
      <img 
        src={afterImage} 
        alt="After Treatment" 
        style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'cover' }} 
      />
      
      {/* Before Image (Foreground with Clip Path) */}
      <img 
        src={beforeImage} 
        alt="Before Treatment" 
        style={{ 
          position: 'absolute', 
          width: '100%', 
          height: '100%', 
          objectFit: 'cover', 
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` 
        }} 
      />
      
      {/* The White Line */}
      <div 
        className="slider-line" 
        style={{ 
          position: 'absolute', 
          left: `${sliderPosition}%`, 
          top: 0, 
          bottom: 0, 
          width: '4px', 
          backgroundColor: 'white', 
          transform: 'translateX(-50%)', 
          pointerEvents: 'none',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)'
        }}
      >
        {/* The Drag Button */}
        <div 
          className="slider-button" 
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)', 
            width: '46px', 
            height: '46px', 
            backgroundColor: 'white', 
            borderRadius: '50%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            boxShadow: '0 4px 15px rgba(0,0,0,0.3)' 
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 18l6-6-6-6 M10 6L4 12l6 6"/>
          </svg>
        </div>
      </div>
      
      {/* The Invisible Range Input for Dragging */}
      <input 
        type="range" 
        min="0" 
        max="100" 
        value={sliderPosition} 
        onChange={(e) => setSliderPosition(e.target.value)} 
        style={{ 
          position: 'absolute', 
          inset: 0, 
          opacity: 0, 
          cursor: 'ew-resize', 
          width: '100%', 
          height: '100%', 
          margin: 0 
        }} 
      />
      
      {/* Labels */}
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', backdropFilter: 'blur(4px)', pointerEvents: 'none' }}>
        Before
      </div>
      <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', backdropFilter: 'blur(4px)', pointerEvents: 'none' }}>
        After
      </div>
    </div>
  );
}
