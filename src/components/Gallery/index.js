import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const images = [
    { src: "/portfolio/images/nespad.PNG", alt: "Nespad" },
    { src: "/portfolio/images/gameboy.png", alt: "Gameboy" },
    { src: "/portfolio/images/supernes.PNG", alt: "Super NES" },
    { src: "/portfolio/images/switch.PNG", alt: "Switch" }
];

const Gallery = () => {
    useEffect(() => {
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
                    dynamicHeight={true}
                    emulateTouch
                    interval={5000}
                    stopOnHover={true}
                >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                style={{
                                    width: "100%",
                                    objectFit: "contain",
                                    maxHeight: "500px"
                                }}
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default Gallery;
