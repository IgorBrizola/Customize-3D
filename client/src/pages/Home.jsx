import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import state from '../store'
import { useSnapshot } from 'valtio';
import { CustomButton } from '../components';
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation
} from '../config/config/motion'


const Home = () => {
  const snap = useSnapshot(state);
  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className='home' {...slideAnimation('left')}>
      {/*     <motion.header {...slideAnimation('down')}>
            <img
              src='./threejs.png'
              alt='logo'
              className='w-8 h-8 object-contain'
            />
          </motion.header> */}
          <motion.div className='home-content' {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className='head-text text-white'>
                VAMOS<br className='xl:block hidden' />CRIAR.
              </h1>
            </motion.div>
            <motion.div {...headContentAnimation} className='flex flex-col gap-5'>

              <p className='max-w-md font-normal text-white text-base'>
               Crie sua camisa personalizada<strong> totalmente em 3D.</strong>{""} você escolhe qual estilo combina com você.
              </p>
              <CustomButton 
              type="filled"
              title='Personalize já'
              handleClick={() => state.intro = false}
              customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home