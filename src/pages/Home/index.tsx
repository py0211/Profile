import styles from './index.module.scss'

import RootContextProvider from '@/contexts/RootContext'

import Lamp from '@/components/Lamp'

import Base from './Base'
import About from './About'

const Home = () => {
  return (
    <RootContextProvider>
      <div className={styles.container}>
        <Base />
        <About />
        <Lamp />
      </div>
    </RootContextProvider>
  )
}

export default Home
