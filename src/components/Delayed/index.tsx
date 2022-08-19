import React, { useEffect, useState } from 'react'

interface IDelayed {
  delay: number
  children: JSX.Element
}

export const Delayed = ({ delay, children }: IDelayed) => {
  const [isHidden, setIsHidden] = useState<boolean>(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHidden(true)
    }, delay)

    return () => {
      setIsHidden(false)
      clearTimeout(timer)
    }
  }, [])
  return isHidden ? null : children
}
