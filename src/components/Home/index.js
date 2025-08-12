import { useEffect } from "react";
import Intro from "./Intro";
import Presentation from "./Presentation";
import Skills from "./Skills";
import { AnimatePresence } from "framer-motion";
import Cv from "./Cv";

const Home = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
      }, []);

    return (
        <AnimatePresence>
            <Intro key={'intro'} />
            <Presentation key={'presentation'}/>
            <Skills key={'skills'}/>
            <Cv key={'cv'}/>
        </AnimatePresence>
    )
}

export default Home;