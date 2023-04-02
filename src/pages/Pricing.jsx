
import Hero from "../components/Hero"
import Partners from "../components/Partners"
import Info from "../components/Info"
import Pricegrid from "../components/Pricegrid"
import { motion } from "framer-motion"

function Pricing() {
  return (
    <motion.div 
      className="page1"
      // initial={{opacity: 0}}
      // animate={{opacity: 1}}
      // exit={{opacity: 0}}
      // transition={{ delay: 0.5 }}
    >
      <Pricegrid />
   </motion.div>
    
  )
}

export default Pricing
