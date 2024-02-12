import Image from "next/image"
import styles from "./page.module.css"
import PreviousCompany from "@/components/PreviousCompanies/PreviousCompany/PreviousCompany"
import PreviousCompanies from "@/components/PreviousCompanies/PreviousCompanies"
import TechStack from "@/components/TechStack/TechStack"
import Tech from "@/components/TechStack/Tech/Tech"
import Hero from "@/components/Hero/Hero"
import Header from "@/components/Header/Header"
import Footer from "@/components/Footer/Footer"
import Contact from "@/components/Contact/Contact"

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <Hero />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
