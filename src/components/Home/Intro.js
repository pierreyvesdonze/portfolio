import { motion } from "framer-motion";
import { FaPhp } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandCss3 } from "react-icons/tb";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbSql } from "react-icons/tb";
import { FaSymfony } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Intro = () => {
    return (
        <motion.div
            key={'parent'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
            style={{ height: '100vh' }}
            className="intro"
        >
            <motion.h1
                key={'title'}
                initial={{ y: '100vh' }}
                animate={{ y: 100 }}
                transition={{ type: 'easeOut', duration: 0.5 }}
                className="intro-name"
            >PIERRE-YVES DONZÉ</motion.h1>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    key={'socialTitle'}
                    initial={{ y: '100vh' }}
                    animate={{ y: 50 }}
                    transition={{ type: 'easeOut', duration: 0.55 }}
                    style={{ fontSize: '6em', textAlign: 'center' }}
                >
                    <Link to={'https://www.linkedin.com/in/pierreyvesdonz%C3%A9/'} target="_blank" style={{ color: 'black' }}>
                        <FaLinkedin size={50} />
                    </Link>
                    <Link to={'https://github.com/pierreyvesdonze'} target="_blank" style={{ color: 'black', marginLeft: '20px' }}>
                        <FaGithub size={50} />
                    </Link>
                </motion.div>
            </div>

            <motion.h2
                key={'devweb'}
                initial={{ y: '100vh' }}
                animate={{ y: 30 }}
                transition={{ type: 'easeOut', duration: 0.6 }}
                style={{ fontSize: '2.5em', textAlign: 'center' }}
            >Développeur web fullstack</motion.h2>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                    key={'html5'}
                    initial={{ y: '100vh' }}
                    animate={{ y: 20 }}
                    transition={{ type: 'easeOut', duration: 0.8 }}
                >
                    <AiOutlineHtml5 size={35} />
                </motion.div>

                <motion.div
                    key={'css3'}
                    initial={{ y: '100vh' }}
                    animate={{ y: 20 }}
                    transition={{ type: 'easeOut', duration: 1 }}
                >
                    <TbBrandCss3 size={35} />
                </motion.div>

                <motion.div
                    key={'php'}
                    initial={{ y: '100vh' }}
                    animate={{ y: 20 }}
                    transition={{ type: 'easeOut', duration: 1.1 }}
                >
                    <FaPhp size={35} />
                </motion.div>

                <motion.div
                    key={'sql'}
                    initial={{ y: '100vh' }}
                    animate={{ y: 20 }}
                    transition={{ type: 'easeOut', duration: 1.2 }}
                >
                    <TbSql size={35} />
                </motion.div>

                <motion.div
                    key={'js'}
                    initial={{ y: '100vh' }}
                    animate={{ y: 20 }}
                    transition={{ type: 'easeOut', duration: 1.3 }}
                >
                    <TbBrandJavascript size={35} />
                </motion.div>

                <motion.div
                    key={'symfony'}
                    initial={{ y: '100vh' }}
                    animate={{ y: 20 }}
                    transition={{ type: 'easeOut', duration: 1.4 }}
                >
                    <FaSymfony size={35} />
                </motion.div>

                <motion.div
                    key={'react'}
                    initial={{ y: '100vh' }}
                    animate={{ y: 20 }}
                    transition={{ type: 'easeOut', duration: 1.5 }}
                >
                    <FaReact size={35} />
                </motion.div>
            </div>

            <motion.div
                key={'arrowDown'}
                initial={{ y: '100vh' }}
                animate={{ y: 100 }}
                transition={{ type: 'easeOut', duration: 1.5 }}
                style={{ margin: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <FaArrowDown size={35} color="orange"/>
            </motion.div>
        </motion.div>
    )
}

export default Intro;