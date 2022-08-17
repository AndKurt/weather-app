/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from 'react-google-login'

import { gapi } from 'gapi-script'

import { fetchCalendar } from '@api/calendarApi'
import { BASE_URL, GOOGLE_CLIENT_ID } from '@constants/api'
import { ProfileObj } from '@interfaces/googleInit'
import { getSortedCalendarData } from '@utils/calendar'
// import { useAppDispatch } from '@store/hooks'
// import { setGoogleToken } from '@store/reducers/generalReducer'

export const Calendar = () => {
  const [profile, setProfile] = useState<ProfileObj | null>(null)
  // const dispatch = useAppDispatch()

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    setProfile((res as GoogleLoginResponse).profileObj)
    const { accessToken } = res as GoogleLoginResponse
    if (accessToken) {
      // dispatch(setGoogleToken(accessToken))
      const data = await fetchCalendar(accessToken)
      if (data instanceof Error) {
        console.log('error')
      } else {
        console.log(getSortedCalendarData(data))
      }
    }
  }

  const onFailure = (err: unknown) => {
    console.log('failed', err)
  }

  const handlelogOut = () => {
    setProfile(null)
    // dispatch(setGoogleToken(''))
  }

  useEffect(() => {
    const initClient = () => {
      gapi.auth2.init({
        client_id: GOOGLE_CLIENT_ID,
        scope: BASE_URL.GOOGLE_URL_SCOPE,
      })
    }
    gapi.load('client:auth2', initClient)
  }, [])

  return (
    <div>
      {profile ? (
        <GoogleLogout clientId={GOOGLE_CLIENT_ID} buttonText="Log out" onLogoutSuccess={handlelogOut} />
      ) : (
        <GoogleLogin
          clientId={GOOGLE_CLIENT_ID}
          buttonText="Sign to Google Calendar"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy="single_host_origin"
          isSignedIn
          responseType="sdf"
        />
      )}
    </div>
  )
}
