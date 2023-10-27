import Navbar from './Navbar/Navbar'
import { ReactElement } from 'react'

type ChildrenType = {children?: ReactElement}

export default function Layout({ children }: ChildrenType) {
  return (
    <html lang="en">
 
      <body >
      <Navbar/>
        {children}
        </body>
    </html>
  )
}