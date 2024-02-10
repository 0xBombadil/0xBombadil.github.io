import Image from "next/image"
import styles from "./page.module.css"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Bombadil</h1>
        <sub>Software Engineer</sub>
      </div>

      <div>
        <h2>Worked with</h2>
        <ul>
          <li>ZKasino</li>
          <li>ZigZag Exchange</li>
          <li>ZigZag Labs</li>
          <li>STFX</li>
        </ul>
      </div>

      <div>
        <h2>Tech Stack</h2>
        <ul>
          <li>HTML5/CSS3</li>
          <li>Node</li>
          <li>Git</li>
          <li>Subversion</li>

          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Redux</li>
          <li>Redux Saga</li>
          <li>Zustand</li>
          <li>WebRTC</li>
          <li>i18n</li>

          <li>Playwright</li>
          <li>C/C++</li>
          <li>C#</li>
          <li>GDScript</li>
          <li>Go</li>
          <li>Matlab</li>
          <li>Mathematica</li>

          <li>Python</li>
          <li>OpenCV</li>
          <li>BeautifulSoup</li>
          <li>Pytorch</li>

          <li>Ethers.js</li>
          <li>Viem</li>
          <li>LaTeX</li>
          <li>Notion</li>
          <li>Inkscape</li>
          <li>Excalidraw</li>
        </ul>
      </div>
    </main>
  )
}
