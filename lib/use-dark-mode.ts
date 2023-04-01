import { useEffect } from 'react'

import useDarkModeImpl from '@fisch0920/use-dark-mode'

import { defaultMode } from './config'

export function useDarkMode() {
  const darkMode = useDarkModeImpl(defaultMode === 'dark', {
    classNameDark: 'dark-mode'
  })
  //workaround for the bug in useDarkModeImpl
  useEffect(() => {    
    if (defaultMode === 'dark') {
      darkMode.enable()
    } else {
      darkMode.disable()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    isDarkMode: darkMode.value,
    toggleDarkMode: darkMode.toggle
  }
}
