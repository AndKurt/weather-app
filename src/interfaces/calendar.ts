import { IFormatedDate } from '@utils/timeDate'

interface IDate {
  dateTime: string | Date
  timeZone: string
}

export interface ICalendarItem {
  summary: string
  start: IFormatedDate
  end: IFormatedDate
}

// -----------Google Calendar API Responce---------
interface DefaultReminder {
  method: string
  minutes: number
}

interface Creator {
  email: string
  self: boolean
}

interface Organizer {
  email: string
  self: boolean
}

interface Reminders {
  useDefault: boolean
}

interface ItemResponce {
  summary: string
  start: IDate
  end: IDate
  kind: string
  etag: string
  id: string
  status: string
  htmlLink: string
  created: Date
  updated: Date
  creator: Creator
  organizer: Organizer
  iCalUID: string
  sequence: number
  reminders: Reminders
  eventType: string
  description: string
}

export interface IGoogleCalendarResponce {
  kind: string
  etag: string
  summary: string
  updated: Date
  timeZone: string
  accessRole: string
  defaultReminders: DefaultReminder[]
  nextSyncToken: string
  items: ItemResponce[]
}

// -----------Google Calendar  sorted data---------
export interface IGoogleCalendarSorted {
  items: ICalendarItem[]
}
