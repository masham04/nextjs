import React from 'react'
import styles from '../styles/Home.module.css'

const about = () => {
    return (
        <div>
            <div className={styles.container}>
                <h1 className='title'>About Page</h1>
                <style jsx>
                    {`
                    .title{
                        color: red;
                    }
                    `}
                </style>
            </div>
        </div>
    )
}

export default about
