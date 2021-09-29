import React from 'react';
import Cl from './buttons.module.scss'

const CredoNavbarBurgerButton = () => {
    return (
        <div className={Cl.CredoNavbarBurgerButton}>
            <div className={Cl.lineL}></div>
            <div className={Cl.lineL}></div>
            <div className={Cl.lineS}></div>
        </div>
    );
};

export default CredoNavbarBurgerButton;