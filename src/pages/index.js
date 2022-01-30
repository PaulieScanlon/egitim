// Step 1: Import React
import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Ana Sayfa">
      <p>
        <h5>
          Ben Kemal, 1967'den beri <i>computer* </i>üstünde yenilikleri izliyor
          ve uyguluyorum.
        </h5>
        <p>
          Çeşitli konulardaki görüşlerimi, deneyimlerimi, özlü sözleri, burada
          paylaşmaktayım. Çizgim Atatürk çizgisidir, ikinci vazifemiz devrimleri
          Anadolu'ya yaymaktır.
        </p>
        <p> *bilgisayar değil, bilgi soyuttur sayılamaz!</p>
      </p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
      />
    </Layout>
  )
}

// Step 3: Export your component
export default IndexPage
