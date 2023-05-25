import { NavLink } from 'react-router-dom';
import c from './Header.module.css';
import logo from './logo.svg'

const Header = (props) => {
    return (
        <header className={c.header}>
            <img src={logo} />

            <div className={c.loginBlock}>
                {props.isAuth ? props.login 
                 :<NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    )
}

export default Header;