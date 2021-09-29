import React from 'react';
import Cl from './CredoHeader.module.scss'
import logoCredo from '../../img/logo/credo.png'
import logoSite from '../../img/logo/logo.png'
import { NavLink, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import UIStore from '../../Store/UIStore';
import CredoNavbarLink from '../UI/navbarLink/CredoNavbarLink'
import CredoNavbarButton from '../UI/buttons/CredoNavbarButton';
import CredoNavbarSearch from '../UI/inputs/CredoNavbarSearch';
import CredoNavbarLogin from '../UI/buttons/CredoNavbarLogin';
import CredoNavbarBurgerButton from '../UI/buttons/CredoNavbarBurgerButton';

const CredoHeader = observer(() => {
    const MyLocation = useLocation().pathname
    const links = UIStore.pages
    return (
        <div className={Cl.headerWrapper}>
            <div className={Cl.header}>
                <NavLink to='/' className={Cl.logo}>
                    {
                        MyLocation === '/' &&
                        <img className={Cl.logoCredo} src={logoCredo} alt="" />
                    }
                    {
                        MyLocation !== '/' &&
                        <img className={Cl.logoSite} src={logoSite} alt="" />
                    }
                </NavLink>
                <div className={Cl.navbar}>
                    {
                        links.map((el,index)=>
                            <CredoNavbarLink key={index} title={el.title} link={el.url}/>
                        )
                    }
                    <CredoNavbarButton/>
                </div>
                <CredoNavbarSearch/>
                <CredoNavbarLogin/>
                <CredoNavbarBurgerButton/>
            </div>
            <div className={Cl.HrLine}></div>
        </div>
    );
})

export default CredoHeader;