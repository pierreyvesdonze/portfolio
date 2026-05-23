import { AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import CvMusic from './CvMusic';
import Keyboard from './Keyboard';

const Music = () => {
    const [isVisible, setIsVisible] = useState(true);

    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
      }, []);

    return (
        <>
            <button onClick={handleButtonClick} style={{
                position: 'absolute', top: '80%', left: '50%', zIndex: '2',
                transform: 'translateX(-50%)'
            }} id= {isVisible ? 'bouton-truc': 'bouton-truc-blanc'}>Switch</button>
            <AnimatePresence>
                <div style={{ height: '100vh' }}>
                    {isVisible ? (
                        <Keyboard key={'keyboard'} />
                    ) : (
                        <CvMusic key={'cvMusic'} />
                    )}
                </div>
            </AnimatePresence>
        </>
    );
};

export default Music;
