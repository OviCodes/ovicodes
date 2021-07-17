import React from 'react'
import styles from './RandomImg.module.css'

export default function RandomImg() {
  return (
    <div className={styles.container}>
      <div
        className={styles.wrapper}
        style={{
          background: `url("https://source.unsplash.com/1200x600/?developer,code,software&rand=${Date.now()}") center center no-repeat`,
        }}
      ></div>
      <p className={styles.label}>
        Random image via{' '}
        <a href="https://unsplash.com/" target="_blank" rel="noopener noreferrer" className={styles.link}>
          Unsplash{' '}
        </a>
        <br />
        Keys: ['developer', 'code', 'software']
      </p>
    </div>
  )
}
