import React from "react";
import styles from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    //NavLink нужен для изменения адресной строки в браузере, чтобы потом компонента route отрисовала нужную компоненту по адресу
    return (
        <nav className={styles.nav}>
            <div>
                <NavLink className={styles.item}
                         activeClassName={styles.active}
                         to={"/profile"}>Profile
                </NavLink>
            </div>
            <div>
                <NavLink className={styles.item}
                         activeClassName={styles.active}
                         to={"/dialogs"} /*"/dialogs" без точки, т.к. тут корневая система сайта*/>Messages
                </NavLink>
            </div>
            <div>
                <NavLink className={styles.item}
                         activeClassName={styles.active}
                         to={"/news"}>News
                </NavLink>
            </div>
            <div>
                <NavLink className={styles.item}
                         activeClassName={styles.active}
                         to={"/music"}>Music
                </NavLink>
            </div>
            <div>
                <NavLink className={styles.item}
                         activeClassName={styles.active}
                         to={"/settings"}>Settings
                </NavLink>
            </div>
        </nav>
    )
}