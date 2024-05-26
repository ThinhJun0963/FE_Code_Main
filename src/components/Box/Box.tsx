import React from 'react';
import styles from './Box.module.css';

interface BoxProps {
    title: string;
    content: string;
}

const Box = ({ title, content }: BoxProps) => {
    return (
        <div className={styles.box}>
            <div className={styles['box-title']}>{title}</div>
            <div className={styles['box-content']}>{content}</div>
        </div>
    )
}

export default Box;