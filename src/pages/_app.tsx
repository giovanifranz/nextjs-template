import { useAxeCore } from '@/hooks'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  useAxeCore()
  return <Component {...pageProps} />
}
