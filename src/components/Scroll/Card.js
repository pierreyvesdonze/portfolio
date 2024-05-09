import { AnimatePresence, motion } from "framer-motion";

const Card = ({ title, bgColor }) => {
    const cardVariants = {
        offscreen: {
            x: -2600
        },
        onscreen: {
            x: 0,
            transition: {
                type: "easeOut",
                duration: 0.8
            }
        }
    };

    return (
        <AnimatePresence>
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div className="card" variants={cardVariants} style={{
                    height: '20vh',
                    backgroundColor: bgColor,
                    margin: '0'
                }}>
                    <motion.h1 style={{ margin: 0, paddingTop: '5%', textAlign: 'center', color: 'white', fontSize: '2em' }}>
                        {title}
                    </motion.h1>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default Card;