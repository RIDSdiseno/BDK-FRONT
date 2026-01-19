import type { ReactNode } from 'react'
import { MotionConfig } from 'framer-motion'

type ProveedoresAppProps = {
  children: ReactNode
}

export const ProveedoresApp = ({ children }: ProveedoresAppProps) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

export default ProveedoresApp
