import Image from 'next/image'
import { useEffect, useState } from 'react'
import React from 'react'

import close from 'public/close.svg'
import computer from 'public/computer.svg'

export const ComputerRecommended: React.FC = () => {
  const [checked, setChecked] = useState(false)
  const [isPhone, setIsPhone] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768)
    }

    if (typeof window !== 'undefined') {
      setChecked(!!localStorage.getItem('computerRecommended'))
      window.addEventListener('resize', handleResize)
    }

    if (window.innerWidth < 768) {
      setIsPhone(true)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const hanldeClose = () => {
    setChecked(true)
    localStorage.setItem('computerRecommended', 'true')
  }

  return !checked && isPhone ? (
    <div className='computer-recommended'>
      <Image src={computer}></Image>
      <h3>من الأفضل استخدام الكمبيوتر</h3>
      <h3>It is Better to use a computer</h3>
      <Image src={close} onClick={hanldeClose}></Image>
    </div>
  ) : null
}
