
import { AnimatePresence, motion } from "framer-motion";

const CvItemLeft = ({ bgColor }) => {
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
            className="cv-item cv-item-left"
        >
            <motion.div variants={cardVariants} style={{
                backgroundColor: bgColor,
                margin: '0',
                borderRadius: '0 60px 60px 0',
            }}>
                <motion.div style={{ margin: 0, paddingTop: '5%', textAlign: 'center', color: 'black', fontSize: '2em' }}>
                    <h1>EXPÉRIENCE PRO</h1>
                    <ul>
                        <li className="cv-li"><span className="cv-subtitle-item">Développeur Web</span></li>
                        <li className="cv-li cv-li-date">Avril 2020 - Aujourd'hui</li>
                        <li></li>
                        <li className="cv-li">Développement Back & Front</li>
                        <li className="cv-li">Expérience UI & UX</li>
                        <li className="cv-li">Test & Debug</li>
                        <li className="cv-li">Mise en prod</li>

                        <br />

                        <li className="cv-li"><span className="cv-subtitle-item">Compositeur</span></li>
                        <li className="cv-li cv-li-date">2016 - 2020</li>
                        <li></li>
                        <li className="cv-li">Création musicale</li>
                        <li className="cv-li">Management</li>
                        <li className="cv-li">Booking</li>
                        <li className="cv-li">Concerts</li>

                        <br />

                        <li className="cv-li"><span className="cv-subtitle-item">Photographe - micro entreprise</span></li>
                        <li className="cv-li cv-li-date">2011 - 2019</li>
                        <li></li>
                        <li className="cv-li">Shooting en studio</li>
                        <li className="cv-li">Retouche photo (Photoshop)</li>
                        <li className="cv-li">Mariages, naissances...</li>
                        <li className="cv-li">Expos</li>
                        <li className="cv-li">Tournage et montage vidéo</li>
                        <br />

                        <li className="cv-li"><span className="cv-subtitle-item">Rédacteur Web</span></li>
                        <li className="cv-li cv-li-date">2013 - 2017</li>
                        <li></li>
                        <li className="cv-li">Méthode Agile</li>
                        <li className="cv-li">Chargé de rédaction de contenu</li>
                        <li className="cv-li">Marketing/communication</li>
                        <li className="cv-li">Packshot produits</li>
                        <li className="cv-li">Rédaction Newsletters</li>
                    </ul>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default CvItemLeft;