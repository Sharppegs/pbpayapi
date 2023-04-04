
import Pricegrid from "../components/Pricegrid"
import { motion } from "framer-motion"

function Pricing() {
  return (
    <motion.div 
      className="page1"
      initial={{width: 0}}
      animate={{width: "100%"}}
      exit={{x: window.innerWidth}}
      transition={{ delay: 0.2 }}
    >
      <Pricegrid />
   </motion.div>
    
  )
}

export default Pricing
