export interface IFormatedDate {
  time: string
  format: string
  date: string
}

const getDateInfo = (currentDate: Date): string => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const day = days[currentDate.getDay()]
  const date = currentDate.getDate()
  const month = months[currentDate.getMonth()]
  const year = currentDate.getFullYear()

  return `${day}, ${date} ${month} ${year}`
}

export const getFormatedDate = (currentDate: Date): IFormatedDate => {
  const formatedTime = currentDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })
  const time = formatedTime.slice(0, formatedTime.length - 2)
  const format = formatedTime.slice(-2)
  const date = getDateInfo(currentDate)
  return {
    time,
    format,
    date,
  }
}

export const getNextWeekdayDate = (plusDayValue: number): string => {
  const currentDate = new Date()
  const date = new Date(currentDate.getTime() + plusDayValue * 24 * 60 * 60 * 1000)
  const convertedDate = (date.getTime() / 1000).toFixed()
  return convertedDate
}

export const getWeekDay = (timestamp: number): string => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const instance = new Date(timestamp * 1000)
  return days[instance.getDay()]
}

export const getFormatedToISODate = (startDate = new Date(), nextDays = 0): string => {
  const date = new Date()
  date.setDate(startDate.getDate() + nextDays)
  date.setHours(0, 0, 0, 0)
  const isoDate = date.toISOString()
  return isoDate
}

export const convertTimeZone = (date: string | Date, tzString: string) =>
  new Date((typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', { timeZone: tzString }))
