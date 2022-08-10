import { getFormatedDate, IFormatedDate } from '@utils/timeDate'
import React, { useEffect, useState } from 'react'
import { DateInfo, Format, Time, TimeBlock, Wrapper } from './styled'

export const DateContainer = () => {
  const [timeState, setTimeState] = useState<IFormatedDate>(() => getFormatedDate(new Date()))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeState(getFormatedDate(new Date()))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <Wrapper>
      <TimeBlock>
        <Time>{timeState.time}</Time>
        <Format>{timeState.format}</Format>
      </TimeBlock>
      <DateInfo>{timeState.date}</DateInfo>
    </Wrapper>
  )
}
