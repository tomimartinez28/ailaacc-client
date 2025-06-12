import React, { useState } from 'react'

function useIsDesktop () {
  const [isDesktop, setIsDesktop] = useState()

  const desktopMediaQuery = window.matchMedia('(min-width : 768px)')

  desktopMediaQuery.addEventListener('change', event => {
    if (event.matches) {
      setIsDesktop(true)
    } else {
      setIsDesktop(false)
    }
  })

  return isDesktop
}

export default useIsDesktop
