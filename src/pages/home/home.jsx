import React from 'react';
import CredoFooter from '../../components/footer/CredoFooter';
import CredoHeader from '../../components/header/CredoHeader';
import Cl from './home.module.scss'

const home = () => {
    return (
        <div className={Cl.home}>
            <CredoHeader/>

            <CredoFooter/>
        </div>
    );
};

export default home;