import React from 'react';
import style from './Button.module.scss';
import { ButtonProperty } from './ButtonProperty';
import { useNavigate } from 'react-router-dom';


/**
 * 
 * @param
 * @returns 
 */
const SimpleButton: React.FC<ButtonProperty> = ({buttonType, message, callback, href, form} : ButtonProperty) => {

    const doNavigate = useNavigate();
    
    if (form != null) {
        return <button className={style.SimpleButton} type={buttonType} form={form}>{message}</button>
    }
    if (callback != null) {
        return <button className={style.SimpleButton} type={buttonType} onClick={callback}>{message}</button>;
    }
    else if (href != null) {
        return <button className={style.SimpleButton} type="button" onClick={() => doNavigate(href)}>{message}</button>;
    }
    else {
        return <button className={style.SimpleButton} type={buttonType}>{message}</button>; // Generic Button that currently does not do anything. For extending button capability testing;
    }
}

export default SimpleButton