import { IGoogleCalendarResponce, IGoogleCalendarSorted } from '@interfaces/calendar'

import { convertTimeZone, getFormatedDate } from './timeDate'

export const getSortedCalendarData = (responceData: IGoogleCalendarResponce): IGoogleCalendarSorted => {
  const data: IGoogleCalendarSorted = {
    items: responceData.items.map((e) => ({
      end: getFormatedDate(convertTimeZone(e.end.dateTime as string, e.end.timeZone)),
      start: getFormatedDate(convertTimeZone(e.start.dateTime as string, e.start.timeZone)),
      summary: e.summary,
    })),
  }

  return data
}
