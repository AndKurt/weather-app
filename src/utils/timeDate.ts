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
  const formatedTime = currentDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
  const time = formatedTime.slice(0, formatedTime.length - 2)
  const format = formatedTime.slice(-2)
  const date = getDateInfo(currentDate)
  return { time, format, date }
}
