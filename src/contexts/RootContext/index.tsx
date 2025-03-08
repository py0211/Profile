import { LOCAL_STORAGE_KEY } from '@/utils/storageKeys'
import { createContext, ReactNode, useContext, useEffect, useMemo } from 'react'

interface RootContextInterface {
  currentIsDarkTheme: () => boolean
  handleThemeOnChange: (isDarkTheme: boolean) => void
}

export enum COLOR_THEME {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const RootContext = createContext<RootContextInterface | null>(null)

const attributeKey = 'data-theme'

const RootContextProvider = ({ children }: { children: ReactNode }) => {
  const currentIsDarkTheme = () => {
    const systemIsDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    return (
      localStorage.getItem(LOCAL_STORAGE_KEY.COLOR_THEME) ===
        COLOR_THEME.DARK || systemIsDarkMode
    )
  }

  const handleThemeOnChange = (isDarkTheme: boolean) => {
    const theme = isDarkTheme ? COLOR_THEME.DARK : COLOR_THEME.LIGHT
    localStorage.setItem(LOCAL_STORAGE_KEY.COLOR_THEME, theme)
    document.documentElement.setAttribute(attributeKey, theme)
  }

  useEffect(() => {
    if (!document.documentElement.getAttribute(attributeKey))
      handleThemeOnChange(currentIsDarkTheme())
  }, [])

  const val: RootContextInterface = useMemo(() => {
    return {
      currentIsDarkTheme,
      handleThemeOnChange,
    }
  }, [])

  return <RootContext.Provider value={val}>{children}</RootContext.Provider>
}

export const useRootContext = () => {
  const ctx = useContext(RootContext)

  if (!ctx) {
    throw new Error('useRootContext must be used within a RootContextProvider')
  }

  return ctx
}

export default RootContextProvider
