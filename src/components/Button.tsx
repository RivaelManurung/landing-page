import { cn } from '../utils/cn'
import { motion } from 'framer-motion'
import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost'
  asChild?: boolean
}

const base = 'inline-flex items-center gap-2 rounded-xl font-semibold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/40 disabled:opacity-50 disabled:cursor-not-allowed'
const variants: Record<string,string> = {
  primary: 'bg-primary-500 hover:bg-primary-600 text-white shadow-soft px-6 py-3',
  outline: 'border border-ink-200 dark:border-ink-700 hover:border-ink-300 dark:hover:border-ink-600 text-ink-800 dark:text-ink-100 px-6 py-3',
  ghost: 'text-ink-600 hover:text-ink-900 dark:text-ink-400 dark:hover:text-ink-100 px-3 py-2'
}

export const Button: React.FC<ButtonProps> = ({ variant='primary', className, children, ...rest }) => {
  return (
    <motion.button
      whileTap={{ scale: 0.95 }}
      whileHover={{ y: -2 }}
  // @ts-ignore: framer-motion typing friction
      className={cn(base, variants[variant], className)}
      {...(rest as any)}
    >
      {children}
    </motion.button>
  )
}

export default Button
