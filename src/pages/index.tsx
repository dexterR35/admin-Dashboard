
import { useRouter } from 'next/router'
import React, { ReactElement,useEffect } from 'react'
import LayoutGuest from '../layouts/Guest'

import { useAppDispatch } from '../stores/hooks'
import { setDarkMode } from '../stores/darkModeSlice'

const StyleSelectPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    document.documentElement.classList.forEach((token) => {
      if (token.indexOf('style') === 0) {
        document.documentElement.classList.replace(token, 'style-white')
      }
    })

    dispatch(setDarkMode(false))

    // Route to the dashboard
    router.push('/dashboard')
  }, [dispatch, router])

  return null;
}

StyleSelectPage.getLayout = function getLayout(page: ReactElement) {
  return <LayoutGuest>{page}</LayoutGuest>
}

export default StyleSelectPage