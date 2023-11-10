import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { ReactElement } from 'react'

type ChildrenType = {children?: ReactElement }

export default function Layout({ children }: ChildrenType) {
  return (
    <html lang="en">
 
      <body >
      <Navbar style={{position: "fixed", top: 0, width: "100%", zIndex: 5}}/>
        {children}
      <Footer/>
        </body>
    </html>
  )
}