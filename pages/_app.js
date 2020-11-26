import '../styles/main.scss';
import { motion, AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={
          { opacity: 0 }
        }>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence >
  )
}

export default MyApp
