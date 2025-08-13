import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '../utils/cn'

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  container?: boolean
  stagger?: boolean
}

export const Section: React.FC<SectionProps> = ({ className, children, container = true, stagger = false, ...rest }) => {
  return (
    <section className={cn('py-20', className)} {...rest}>
      <div className={cn(container && 'container mx-auto px-6')}> 
        <motion.div
          initial={stagger ? 'hidden' : undefined}
          whileInView={stagger ? 'show' : undefined}
          viewport={{ once: true, margin: '-80px' }}
          variants={stagger ? { hidden: {}, show: { transition: { staggerChildren: 0.08 } } } : undefined}
        >
          {children}
        </motion.div>
      </div>
    </section>
  )
}

export default Section
