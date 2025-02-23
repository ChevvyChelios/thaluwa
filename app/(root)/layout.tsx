import CenteredCurtainReveal from '@/components/launch'
import React, { ReactNode } from 'react'

// type Props = {}

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <CenteredCurtainReveal>{children}</CenteredCurtainReveal>
      {/* {children} */}
    </>
  )
}

export default Layout