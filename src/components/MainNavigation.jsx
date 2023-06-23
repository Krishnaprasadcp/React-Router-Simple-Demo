import {NavLink } from "react-router-dom"
import classes from './mainNavigation.module.css'
function MainNavigation(){
    return(
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink className={({isActive})=>isActive ? classes.active : undefined} to="/">Home</NavLink></li>
                    <li><NavLink className={({isActive})=>isActive ? classes.active : undefined} to='/product'>Products</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}
export default MainNavigation;