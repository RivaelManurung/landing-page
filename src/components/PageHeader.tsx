import { motion } from 'framer-motion'
import React from 'react'
import { cn } from '../utils/cn'

interface PageHeaderProps {
  title: string
  description?: string
  eyebrow?: string
  children?: React.ReactNode
  className?: string
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, eyebrow, children, className }) => {
  return (
    <div className={cn('relative pt-32 pb-16 overflow-hidden', className)}>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50/60 via-white to-white dark:from-ink-900 dark:via-ink-900 dark:to-ink-900" />
      <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-radial-at-t from-primary-400/25 via-primary-500/10 to-transparent blur-3xl" />
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {eyebrow && <span className="inline-block text-xs font-semibold tracking-wider uppercase text-primary-600 bg-primary-500/10 ring-1 ring-primary-500/20 px-3 py-1 rounded-full mb-6">{eyebrow}</span>}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-ink-900 dark:text-white leading-tight">{title}</h1>
          {description && <p className="mt-5 text-lg text-ink-600 dark:text-ink-400 max-w-2xl">{description}</p>}
          {children && <div className="mt-8">{children}</div>}
        </motion.div>
      </div>
    </div>
  )
}

export default PageHeader
