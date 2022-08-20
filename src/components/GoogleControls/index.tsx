/* eslint-disable object-curly-newline */
import React, { useEffect } from 'react'
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline, GoogleLogout } from 'react-google-login'

import { googleInit } from '@api/calendarApi'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
  getCalendarDataPending,
  getCalendarDataRejected,
  setIsGoogleAuth,
  setUserData,
} from '@store/reducers/calendarReducer'

// const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID as string

export const GoogleControls = () => {
  const dispatch = useAppDispatch()
  const { isAuth } = useAppSelector((state) => state.calendarReducer)

  const onSuccess = async (res: GoogleLoginResponse | GoogleLoginResponseOffline) => {
    const userData = (res as GoogleLoginResponse).profileObj
    const { accessToken } = res as GoogleLoginResponse
    if (accessToken) {
      dispatch({ type: getCalendarDataPending.type, payload: { accessToken, userData } })
    }
  }

  const onFailure = (err: { error: string }) => {
    dispatch(getCalendarDataRejected(err.error))
  }

  const handlelogOut = () => {
    dispatch(setUserData(null))
    dispatch(setIsGoogleAuth(false))
  }

  useEffect(() => {
    googleInit()
  }, [])

  return (
    <div>
      {isAuth ? (
        <GoogleLogout
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
          buttonText="Log out"
          onLogoutSuccess={handlelogOut}
        />
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID as string}
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
