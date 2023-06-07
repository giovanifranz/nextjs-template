import { useEffect } from 'react'

export function useAxeCore() {
  useEffect(() => {
    ;(async () => {
      if (process.env.NODE_ENV === 'development') {
        const axe = await require('@axe-core/react')
        const React = await require('react')
        const ReactDom = require('react-dom')

        axe(React, ReactDom, 1000)
      }
    })()
  }, [])
}
