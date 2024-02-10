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

        <h3>Web</h3>
        <ul>
          <li>HTML5/CSS3</li>
          <li>Node</li>
          <li>Javascript</li>
          <li>Typescript</li>
          <li>React</li>
          <li>Next.js</li>
        </ul>

        <h3>State Management</h3>
        <ul>
          <li>Redux</li>
          <li>Redux Saga</li>
          <li>Zustand</li>
        </ul>

        <h3>Internationalization</h3>
        <ul>
          <li>next-i18next</li>
          <li>Lingui</li>
        </ul>

        <h3>Versioning and Deployment</h3>
        <ul>
          <li>Vercel</li>
          <li>Git</li>
          <li>Subversion</li>
        </ul>

        <h3>Testing</h3>
        <ul>
          <li>Playwright</li>
        </ul>

        <h3>Web3</h3>
        <ul>
          <li>Ethers.js</li>
          <li>Viem</li>
        </ul>

        <h3>Data Science</h3>
        <ul>
          <li>Python</li>
          <li>OpenCV</li>
          <li>BeautifulSoup</li>
          <li>Pytorch</li>
          <li>Matlab</li>
          <li>Mathematica</li>
        </ul>

        <h3>Art,Writing and Notes</h3>
        <ul>
          <li>LaTeX</li>
          <li>Notion</li>
          <li>Inkscape</li>
          <li>Excalidraw</li>
        </ul>

        <h3>Other</h3>
        <ul>
          <li>Go</li>
          <li>C/C++</li>
          <li>WebRTC</li>
          <li>C#</li>
          <li>GDScript</li>
          <li>MIDI</li>
        </ul>
      </div>
    </main>
  )
}
