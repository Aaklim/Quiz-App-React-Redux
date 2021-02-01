import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Drawer from '../../Components/Navigation/Drawer/Drawer'
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle'
import classes from './Layout.module.scss'

const Layout = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const toggleMenuHandler = () => {
    setMenu(!menu)
  }

  return (
    <div className={classes.Layout}>
      <Drawer isOpen={menu} onClick={toggleMenuHandler} />
      <MenuToggle onToggle={toggleMenuHandler} isOpen={menu} />
      <main>{children}</main>
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
