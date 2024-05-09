import { motion } from "framer-motion";
import SkillsCard from "./SkillsCard";

const Skills = () => {

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "easeOut", duration: 2 }}
                className="skills-container">

                <motion.h1 style={{ fontSize: '4em', textAlign: 'center' }}>SOFT SKILLS</motion.h1>

                <SkillsCard title={'Autonomie'} bgColor={'#000000a6'} />
                <SkillsCard title={'Créativité'} bgColor={'#000000b7'} />
                <SkillsCard title={'Organisation'} bgColor={'#000000c8'} />
                <SkillsCard title={'Curiosité'} bgColor={'#000000d9'} />
                <SkillsCard title={'Empathie'} bgColor={'#000000ed'} />
                <SkillsCard title={'Minutie'} bgColor={'#000000f2'} />
                <SkillsCard title={'Respect des normes'} bgColor={'#000000f5'} />
                <SkillsCard title={"Esprit d'équipe"} bgColor={'#000000fa'} />
                <SkillsCard title={'Éthique professionnelle'} bgColor={'#000000'} />
            </motion.div>
        </>
    )
}

export default Skills;