import React, { useState, useEffect } from 'react';
import styles from './CustomCursor.module.css'; // Adjust the path to your CSS module
import {Svg} from '../styles/svg';


const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Hide the default cursor
    document.body.style.cursor = 'none';

    return () => {
      // Restore the default cursor when the component is unmounted
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <div
      className={styles['custom-cursor']}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
         <Svg.Path
            css={{
               fill: '$accents9',
            }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.167 4.5a1.167 1.167 0 1 1-2.334 0 1.167 1.167 0 0 1 2.334 0Z"
         ></Svg.Path>
          <Svg.Path
            css={{
               fill: '$accents9',
            }}
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM1 8a7 7 0 0 1 7-7 3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 0 0 7 7 7 0 0 1-7-7Zm7 4.667a1.167 1.167 0 1 1 0-2.334 1.167 1.167 0 0 1 0 2.334Z"
         ></Svg.Path>
      </Svg>
    </div>
  );
};

export default CustomCursor;
