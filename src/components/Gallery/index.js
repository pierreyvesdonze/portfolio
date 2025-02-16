import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
    useEffect(() => {
        // Faire défiler la page jusqu'en haut lorsque le composant est monté
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={{ width: "100%" }}>
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 50 }}
                transition={{ type: "easeOut", duration: 0.6 }}
                style={{
                    position: "absolute",
                    top: "35px",
                    left: "calc(50% - 90px)",
                    textAlign: "center",
                    width: "auto"
                }}
            >
                Créations CSS
            </motion.h1>

            <motion.hr
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{
                    width: "100%",
                    height: "1px",
                    backgroundColor: "#000",
                    border: "none",
                    position: "absolute",
                    top: "200px",
                    left: "0",
                    transformOrigin: "left"
                }}
            />
            <div style={{ maxWidth: "100%", margin: "auto", marginTop: "250px", userSelect: 'none' }}>
                <Carousel
                    autoPlay
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    swipeable={true}
                    dynamicHeight={true} // Pour ajuster la hauteur en fonction de l'image
                    emulateTouch
                    interval={5000}
                >
                    <div>
                        <img
                            src="/images/gameboy.png"
                            alt="Gameboy"
                            style={{
                                width: "100%",
                                objectFit: "contain",
                                maxHeight: "500px"
                            }}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/nespad.png"
                            alt="Nespad"
                            style={{
                                width: "100%",
                                objectFit: "contain",
                                maxHeight: "500px"
                            }}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/supernes.png"
                            alt="Super NES"
                            style={{
                                width: "100%",
                                objectFit: "contain",
                                maxHeight: "500px"
                            }}
                        />
                    </div>
                    <div>
                        <img
                            src="/images/switch.png"
                            alt="Switch"
                            style={{
                                width: "100%",
                                objectFit: "contain",
                                maxHeight: "500px"
                            }}
                        />
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Gallery;
