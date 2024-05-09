import CvItemLeft from "./CvItemLeft.js";
import CvItemRight from "./CvItemRight.js";
import { motion } from "framer-motion";
const Cv = () => {
    return (
        <>
        <motion.h1 style={{ fontSize: '4em', textAlign: 'center' }}>CV</motion.h1>
            <div style={{ display: 'flex' }} id="cv">
                <CvItemLeft bgColor={'transparent'} />
                <CvItemRight bgColor={'#ebebeb'} />
            </div>
        </>
    )
}

export default Cv;