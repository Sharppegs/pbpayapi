
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Info from "../components/Info"
import { motion } from "framer-motion"

function Home() {
  return (
    <motion.div 
      className="page1"
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth}}
      transition={{ delay: 0.2 }}
    >
      <Hero />
      <Partners />
      <Info /> 
   </motion.div>
    
  )
}

export default Home
