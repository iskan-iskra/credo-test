import React from 'react';
import Cl from './inputs.module.scss'

const CredoNavbarSearch = () => {
    return (
        <div className={Cl.CredoNavbarSearchWrapper}>
            <input 
                className={Cl.CredoNavbarSearch} 
                type="text" 
                placeholder='Материалы или автор'/>
            <div className={Cl.iconSearch}></div>
        </div>
       
    );
};

export default CredoNavbarSearch;