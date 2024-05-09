import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Project = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0 });
    }, []);

    return (
        <AnimatePresence>
            <motion.div
                key={'absurdum'}
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ type: 'easeOut', duration: 1 }}
                className='project-container'
            >
                <motion.h1 style={{ fontSize: '2.5em' }}>Absurdum</motion.h1>
                <motion.h2>React JS</motion.h2>
                <motion.p>
                    Absurdum est un jeu Javascript créé avec React (et ChatGPT). Le jeu est un ensemble de plusieurs niveaux de difficulté et de quêtes, matérialisés par des mini-jeux d'énigmes, de réflexion et de rapidité. J'ai choisi ici de limiter l'utilisation aux PC uniquement, avec grand écran, clavier et souris.
                </motion.p>
                <Link to={'https://absurdum.pydonze.fr'} className='project-link' target='_blank'>JOUER</Link>
            </motion.div>

            <motion.br key={'br1'} />
            <motion.hr key={'hr1'} />

            <motion.div
                key={'mydiary'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'easeOut', duration: 2 }}
                className='project-container'
            >
                <motion.h1 style={{ fontSize: '2.5em' }}>MyDiary</motion.h1>
                <motion.h2>Symfony</motion.h2>
                <motion.p>
                    MyDiary est un journal de bord amélioré regroupant des outils de suivi de l'humeur, de la santé (poids, vaccins, traitements...), et des dates importantes dans le parcours de vie. Outre le remplissage de données personnelles, une fonction de relation entre utilisateurs permet d'être en contact avec des professionnels de la santé, pour partager l'évolution de sa santé mentale.
                </motion.p>
                <Link to={'https://mydiary.pydonze.fr'} className='project-link' target='_blank'>VISITER</Link>
            </motion.div>

            <motion.br key={'br2'} />
            <motion.hr key={'hr2'} />

            <motion.div
                key={'monpoison'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'easeOut', duration: 3 }}
                className='project-container'
            >
                <motion.h1 style={{ fontSize: '2.5em' }}>Monpoison</motion.h1>
                <motion.h2>Symfony</motion.h2>
                <motion.p>
                    J'ai conçu cette application dans le but de sensibiliser et d'accompagner les usagers de l'alcool vers un mieux-être, en suivant quotidiennement leurs consommations et idéalement leur abstinence. L'application offre un moyen de suivre de près l'addiction pour mieux la combattre.
                </motion.p>
                <Link to={'https://monpoison.fr'} target='_blank' className='project-link'>VISITER</Link>
            </motion.div>

            <motion.br key={'br3'} />
        </AnimatePresence>
    );
}

export default Project;
