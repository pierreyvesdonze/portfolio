import { motion } from "framer-motion";

const CvItemRight = ({ bgColor }) => {
    const cardVariants = {
        offscreen: {
            opacity: 0
        },
        onscreen: {
            opacity: 1,
            transition: {
                type: "easeOut",
                duration: 1.5
            }
        }
    };

    return (
        <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.2 }}
            className="cv-item"
        >
            <motion.div variants={cardVariants} style={{
                height: '180vh',
                backgroundColor: bgColor,
                margin: '0',
                borderRadius: '60px 0 0 60px'
            }}>
                <motion.div style={{ margin: 0, paddingTop: '5%', textAlign: 'center', color: 'black', fontSize: '2em' }}>
                    <h1>FORMATION</h1>
                    <ul>
                        <li className="cv-li"><span className="cv-subtitle-item">École O'clock</span></li>
                        <li className="cv-li cv-li-date">2019 - 2020</li>
                        <li></li>
                        <li className="cv-li">700h en téléprésentiel</li>
                        <li className="cv-li">3 mois de socle</li>
                        <li className="cv-li">100 challenges</li>
                        <li className="cv-li">Spécialisation Symfony</li>
                    </ul>

                    <br />

                    <h1>COMPÉTENCES</h1>
                    <ul>
                        <li className="cv-li">Configurer un environnement LAMP</li>
                        <li className="cv-li">Créer une maquette</li>
                        <li className="cv-li">Concevoir un modèle de données</li>
                        <li className="cv-li">Bonne connaissance de Symfony & React</li>
                        <li className="cv-li">Modéliser une inferface responsive</li>
                        <li className="cv-li">Mise en conformité RGPD</li>
                        <li className="cv-li">Créer des tests unitaires et fonctionnels</li>
                        <li className="cv-li">Tester, corriger des bugs</li>
                        <li className="cv-li">Versionner et mettre en prod</li>
                        <li className="cv-li">Veille technologique</li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CvItemRight;