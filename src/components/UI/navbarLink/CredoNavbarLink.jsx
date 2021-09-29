import React from 'react';
import { NavLink } from 'react-router-dom';
import Cl from './navbarLink.module.scss'

const CredoNavbarLink = ({link, title}) => {
    return (
        <NavLink to={link} className={Cl.NavLink}>
            {title}
        </NavLink>
    );
};

export default CredoNavbarLink;