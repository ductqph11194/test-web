
'use client';
import React from 'react';
import { Collapse, Button } from 'antd';
import styles from '../styles/FAQ.module.css';
import type { CollapseProps } from 'antd';


const FAQ = () => {

    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: 'Question',
            children: <p>answer</p>,
        },
        {
            key: '2',
            label: 'Question',
            children: <p>answer</p>,
        },
        {
            key: '3',
            label: 'Question',
            children: <p>answer</p>,
        },
    ];
    const onChange = (key: string | string[]) => {
        console.log(key);
    };
    return (
        <div className={styles.container}>
            <h2 className={styles.h2text}>FAQs</h2>
            <h3>All your Questions, Answered</h3>
            <Collapse className={styles.collapse} items={items} onChange={onChange} />
            <Button className={styles.seeAllButton} type="primary">See All FAQs</Button>
        </div>
    );
};

export default FAQ;