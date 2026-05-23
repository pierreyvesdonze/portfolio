import { motion } from "framer-motion";

const TestPute = () => {
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


    function CardTest({ title, bgColor }) {

        return (
            <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <motion.div className="card" variants={cardVariants} style={{
                    height: '20vh',
                    backgroundColor: bgColor,
                    margin: '0'
                }}>
                    <motion.h1 style={{ margin: 0, paddingTop: '5%', textAlign: 'center', color: 'white', fontSize: '2em' }}>
                        {title}
                    </motion.h1>
                </motion.div>
            </motion.div>
        );
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "easeOut", duration: 2 }}
                style={{ height: '100vh' }}>

                <h1 style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', fontSize: '8em' }}>Scroll Down</h1>
            </motion.div>
            <CardTest title={'T E S T'} bgColor={'#000000e6'} />
        </>
    )
}

export default TestPute;