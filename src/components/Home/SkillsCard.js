import { motion } from "framer-motion";

const SkillsCard = ({ title, bgColor }) => {
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
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="skills-card-parent"
         >

            <motion.div className="skills-card" variants={cardVariants} style={{
                height: '10vh',
                backgroundColor: bgColor,
                margin: '0',
                boxShadow: '0px 0px 4px 0px',
                backdropFilter: 'blur(8px)',
            }}>
                <motion.h1 style={{
                    margin: 0,
                    paddingTop: '1.5%',
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '2em',
                }}>
                    {title}
                </motion.h1>
            </motion.div>
        </motion.div>
    );
};

export default SkillsCard;