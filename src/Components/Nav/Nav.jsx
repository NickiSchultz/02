import { NavLink } from 'react-router-dom';
import c from './Nav.module.css';

const Nav = (props) => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink to="/profile" className={navData => navData.isActive ? c.activeLink : c.item}>Profile</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/messages" className={navData => navData.isActive ? c.activeLink : c.item}>Messages</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/friends" className={navData => navData.isActive ? c.activeLink : c.item}>Friends </NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/news" className={navData => navData.isActive ? c.activeLink : c.item}>News</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/music" className={navData => navData.isActive ? c.activeLink : c.item}>Music</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/settings" className={navData => navData.isActive ? c.activeLink : c.item}>Settings</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/users" className={navData => navData.isActive ? c.activeLink : c.item}>Users</NavLink>
      </div>
    </nav>
  )
}

export default Nav;