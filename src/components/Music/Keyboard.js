import { motion } from 'framer-motion';

const Keyboard = () => {
    const colors = [
        '#000000e6',
        '#000000e7',
        '#000000e8',
        '#000000e9',
        '#000000ea',
        '#000000eb',
        '#000000ec',
        '#000000ed',
        '#000000ee',
        '#000000ef',
        '#000000f0',
        '#000000f1',
        '#000000f2',
        '#000000f3',
        '#000000f4',
        '#000000f5',
        '#000000f6',
        '#000000f7'
    ];

    const grayColors = [
        '#fafafa', // White
        '#f2f2f2',
        '#ebebeb',
        'transparent',
        '#dcdcdc',
        '#d4d4d4',
        'transparent',
        '#c5c5c5',
        '#bdbdbd',
        '#b6b6b6',
        'transparent',
        '#a7a7a7',
        '#a0a0a0',
        'transparent',
        '#989898',
        '#919191',
        '#828282',
        'transparent',
    ];

    const blackElements = colors.map((color, index) => (
        <motion.div
            key={index}
            initial={{ y: '-100vh' }}
            animate={{ y: 0 }}
            transition={{ type: "easeIn", duration: (index + 1) * 0.1 }}
            exit={{ y: '-100vh', transition: { duration: (index + 1) * 0.05, type: "easeOut" } }}
            style={{ height: '100vh', backgroundColor: color, width: "10%", boxShadow: '5px 0px 6px -3px black' }}
        />
    ));

    const grayElements = grayColors.map((color, index) => (
        <motion.div
            key={index}
            initial={{ y: '-100vh', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "easeIn", duration: (index + 1) * 0.1 }}
            exit={{ y: '-100vh', opacity: 0, transition: { duration: (index + 1) * 0.05, type: "easeOut" } }}
            style={{
                position: 'absolute',
                top: 0,
                height: '70vh',
                backgroundColor: color,
                width: "3%",
                left: `${10 * (index * 0.545)}%`,
                boxShadow: color !== 'transparent' ? 'black 0 0 13px 5px' : 'none',
                borderRadius: '0 0 5px 5px'
            }}
        />
    ));

    return (
        <motion.div style={{ display: 'flex', width: '100%', position: 'relative' }}>
            {blackElements}
            {grayElements}
        </motion.div>
    );
};

export default Keyboard;
