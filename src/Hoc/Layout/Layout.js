import React, { useState } from 'react'
import Drawer from '../../Components/Navigation/Drawer/Drawer'
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle'
import classes from './Layout.module.scss'

const Layout = (props) => {
  const [menu, setMenu] = useState(false)
  const toggleMenuHandler = () => {
    setMenu(!menu)
  }

  return (
    <div className={classes.Layout}>
      <Drawer isOpen={menu} onClick={toggleMenuHandler} />
      <MenuToggle onToggle={toggleMenuHandler} isOpen={menu} />
      <main>{props.children}</main>
    </div>
  )
}

export default Layout
