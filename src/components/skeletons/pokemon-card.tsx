import { motion } from 'framer-motion'

export const PokemonCardSkeleton = () => {
  return (
    <motion.div
      initial={{ opacity: 0.3 }}
      animate={{ opacity: 0.8 }}
      transition={{ ease: 'easeInOut', duration: 1, repeat: Infinity }}
      className="relative w-[144px] h-[202px] bg-gray-100 border border-gray-200 rounded-md"
    >
      <span className="sr-only">Carregando...</span>
    </motion.div>
  )
}
