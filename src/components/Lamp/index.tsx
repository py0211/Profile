import { useRootContext } from '@/contexts/RootContext'
import styles from './index.module.scss'

const Lamp = () => {
  const { currentIsDarkTheme, handleThemeOnChange } = useRootContext()

  return (
    <div
      className={styles.container}
      onClick={() => handleThemeOnChange(!currentIsDarkTheme())}
    >
      <div className={styles.line} />
      <div className={styles.dot} />
    </div>
  )
}

export default Lamp
