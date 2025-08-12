import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    return (
        <motion.div
            key={'contactParent'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ height: '100vh' }}
            className="contact"
        >
            <motion.a href="mailto:pierreyvesdonze.pro@gmail.com" key={'mailto'}>
                <motion.h1
                    key={'mail'}
                    id="contact-mail"
                    initial={{ y: '100vh' }}
                    animate={{ y: 250 }}
                    transition={{ type: 'easeOut', duration: 0.6 }}
                    style={{ textAlign: 'center', color: 'var(--dark-police)' }}
                >pierreyvesdonze.pro@gmail.com
                </motion.h1>
            </motion.a>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    key={'socialTitle'}
                    initial={{ y: '100vh' }}
                    animate={{ y: 200 }}
                    transition={{ type: 'easeOut', duration: 1 }}
                    style={{ fontSize: '6em', textAlign: 'center' }}
                >
                    <Link to={'https://www.linkedin.com/in/pierreyvesdonz%C3%A9/'} target="_blank" style={{ color: 'var(--dark-text)' }}>
                        <FaLinkedin size={50} />
                    </Link>
                    <Link to={'https://github.com/pierreyvesdonze'} target="_blank" style={{ color: 'var(--dark-text)', marginLeft: '20px' }}>
                        <FaGithub size={50} />
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default Contact;