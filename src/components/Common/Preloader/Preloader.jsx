import React from 'react';
import css from './preloader.module.css'
import preloader from '../../../assets/img/loader.svg'

let Preloader = () => {
    return <div className={css.preloader}>
        <img src={preloader} alt="preloader"/>
    </div>
}

export default Preloader