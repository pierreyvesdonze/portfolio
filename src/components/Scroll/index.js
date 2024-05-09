import { useEffect } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Scroll = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    return (
        <>
            {/* <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "easeOut", duration: 2 }}
                style={{ height: '100vh' }}>

                <h1 style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', fontSize: '8em' }}>Scroll Down</h1>
            </motion.div> */}
            <Card title={'#000000e6'} bgColor={'#000000e6'} />
            <Card title={'#000000e7'} bgColor={'#000000e7'} />
            <Card title={'#000000e8'} bgColor={'#000000e8'} />
            <Card title={'#000000e9'} bgColor={'#000000e9'} />
            <Card title={'#000000ea'} bgColor={'#000000ea'} />
            <Card title={'#000000eb'} bgColor={'#000000eb'} />
            <Card title={'#000000ec'} bgColor={'#000000ec'} />
            <Card title={'#000000ed'} bgColor={'#000000ed'} />
            <Card title={'#000000ee'} bgColor={'#000000ee'} />
            <Card title={'#000000ef'} bgColor={'#000000ef'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
            <Card title={'#000000f0'} bgColor={'#000000f0'} />
        </>
    )
}

export default Scroll;