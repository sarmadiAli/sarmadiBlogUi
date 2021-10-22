import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Layout from '../components/Layout'
import "../styles/index.css"

export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url, { shallow }) => {
      console.log("alisarmadi")

    }

    router.events.on('routeChangeStart', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    return () => {
      router.events.off('routeChangeStart', handleRouteChange)
    }
  }, [])

  return (<>
    <Layout >
      <Component {...pageProps} />
    </Layout>
  </>)
}
