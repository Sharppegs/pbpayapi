
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Info from "../components/Info"
import { motion } from "framer-motion"

function Home() {
  return (
    <motion.div 
      className="page1"
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
      // transition={{ delay: 0.5 }}
    >
      <Hero />
      <Partners />
      <Info /> 
   </motion.div>
    
  )
}

export default Home
