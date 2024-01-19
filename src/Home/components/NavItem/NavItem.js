import './NavItem.css'

 const NavItem = (props) => {
  return (
    <li calssName='nav-item'>
        {props.children}
    </li>
  )
}

 const NavItemDropDown = (props) => {
  return (
    <li calssName='nav-item dropdown'>
        {props.children}
    </li>
  )
}

export default NavItem
export {NavItemDropDown}