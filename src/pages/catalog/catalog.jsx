import React from 'react';
import CredoFooter from '../../components/footer/CredoFooter';
import CredoHeader from '../../components/header/CredoHeader';
import Cl from './catalog.module.scss'

const catalog = () => {
    return (
        <div className={Cl.catalog}>
            <CredoHeader/>
            <CredoFooter/>
        </div>
    );
};

export default catalog;