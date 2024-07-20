import Footer from './Footer/Footer'
import Navbar from './Navbar/Navbar'
import { Fragment, ReactElement } from 'react'

type ChildrenType = {children?: ReactElement }

export default function Layout({ children }: Readonly<ChildrenType>) {
  return (
    <Fragment>
      <Navbar style={{position: "fixed", top: 0, width: "100%", zIndex: 5}}/>
        {children}
      <Footer/>
      </Fragment>
  )
}