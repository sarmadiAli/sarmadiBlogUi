import Head from "next/head";
import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Ali Sarmadi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="">
        <Header />
      </div>

    </div>
  )
}
