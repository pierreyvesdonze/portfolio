import { motion } from "framer-motion";

const PresentationItemRight = ({ bgColor }) => {
    const cardVariants = {
        offscreen: {
            x: 2600
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
            viewport={{ once: true, amount: 0.2 }}
            className="presentation-item"
        >
            <motion.div variants={cardVariants} style={{
                height: '120vh',
                backgroundColor: bgColor,
                margin: '0',
                borderRadius: '60px 0 0 60px'
            }}>
                <motion.div style={{ margin: 0, paddingTop: '5%', textAlign: 'center', color: 'white', fontSize: '2em' }}>
                    <h1>FRONTEND</h1>
                    <br />
                    <ul>
                        <li>Maîtrise de HTML, JS, CSS</li>
                        <li>Bonnes connaissances de Jquery</li>
                        <li>Utilisation courante de React JS</li>
                        <li>Webdesign (Maîtrise de Photoshop)</li>
                        <li>Sites et applications Responsive</li>
                        <li>Intégration et consommation d'API</li>
                        <li>Utilisation de composants UI</li>
                        <li>Création de PWA</li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default PresentationItemRight;