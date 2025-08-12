import { motion } from "framer-motion";

const PresentationItemLeft = ({ bgColor }) => {
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
            viewport={{ once: true, amount: 0.2 }}
            className="presentation-item"
        >
            <motion.div variants={cardVariants} style={{
                height: '120vh',
                backgroundColor: bgColor,
                margin: '0',
                borderRadius: '0 60px 60px 0'
            }}>
                <motion.div style={{ margin: 0, paddingTop: '5%', textAlign: 'center', color: 'white', fontSize: '2em' }}>
                    <h1>BACKEND</h1>
                    <br />
                    <ul>
                        <li>Maîtrise de PHP, SQL</li>
                        <li>Gestion de bases de données</li>
                        <li>Maîtrise de Symfony</li>
                        <li>Utilisation d'ORM (Doctrine)</li>
                        <li>Sécurisation des données</li>
                        <li>Création d'API Restful</li>
                        <li>Intégration de services tiers</li>
                        <li>Versionnement avec Github</li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default PresentationItemLeft;