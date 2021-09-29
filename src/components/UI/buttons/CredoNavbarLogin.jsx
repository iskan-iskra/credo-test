import React from 'react';
import Cl from './buttons.module.scss'

const CredoNavbarLogin = () => {
    return (
        <div className={Cl.CredoNavbarLoginWrapper}>
            <div className={Cl.CredoNavbarLogin}>
                <div className={Cl.icon}></div>
            </div>
            <div className={Cl.text}>Войти</div>
        </div>
        
    );
};

export default CredoNavbarLogin;