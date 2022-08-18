import { IGoogleCalendarResponce, IGoogleCalendarSorted } from '@interfaces/calendar'

import { convertTimeZone, getFormatedDate } from './timeDate'

export const getSortedCalendarData = (responceData: IGoogleCalendarResponce): IGoogleCalendarSorted => {
  const data = {
    items: responceData.items
      .map((e) => ({
        end: e.end.dateTime,
        start: e.start.dateTime,
        summary: e.summary,
        timeZone: e.start.timeZone,
      }))
      .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())
      .map((e) => ({
        end: getFormatedDate(convertTimeZone(e.end as string, e.timeZone)),
        start: getFormatedDate(convertTimeZone(e.start as string, e.timeZone)),
        summary: e.summary,
      })),
  }

  return data
}
