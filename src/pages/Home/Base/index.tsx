import styles from './index.module.scss'
import Banner from '@/assets/images/banner2.png'

const Base = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}>Hello, I am Jessica.</span>
        <img src={Banner} />
        <i className={styles.msg}>- Frontend Developer -</i>
      </div>
      <div className={styles.backgroundCircle1} />
      <div className={styles.backgroundCircle2} />
      <div className={styles.backgroundCircle3} />
    </div>
  )
}

export default Base
