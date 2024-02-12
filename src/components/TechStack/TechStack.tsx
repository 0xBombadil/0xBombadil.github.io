import React from "react"
import styles from "./TechStack.module.css"
import Tech from "./Tech/Tech"

export default function TechStack() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Current Tech Stack</h2>
        <div>*not exhaustive, always growing</div>
      </div>
      <div className={styles.techs}>
        <Tech name="HTML5" icon="tech/html5.svg" />
        <Tech name="CSS3" icon="tech/css3.svg" />
        <Tech name="Node" icon="tech/nodejs.png" />
        <Tech name="Javascript" icon="tech/javascript.svg" />
        <Tech name="Typescript" icon="tech/typescript.svg" />
        <Tech name="React" icon="tech/reactjs.svg" />
        <Tech name="Next.js" icon="tech/nextjs.svg" />
        <Tech name="Vercel" icon="tech/vercel.svg" />
        <Tech name="Redux" icon="tech/redux.svg" />
        <Tech name="Redux Saga" icon="tech/reduxsaga.svg" />
        <Tech name="Zustand" icon="tech/zustand.png" />
        <Tech name="Three.js" icon="tech/threejs.svg" />
        <Tech name="React Fiber" icon="tech/reactfiber.svg" />
        <Tech name="next-i18next" icon="tech/i18n.png" />
        <Tech name="Lingui" icon="tech/lingui.png" />

        <Tech name="Playwright" icon="tech/playwright.svg" />
        <Tech name="Dappwright" icon="tech/dappwright.svg" />
        <Tech name="Ethers" icon="tech/ethers.svg" />
        <Tech name="Viem" icon="tech/viem.svg" />
        <Tech name="Web3.js" icon="tech/web3js.svg" />

        <Tech name="WebGL" icon="tech/webgl.svg" />
        <Tech name="Python" icon="tech/python.svg" />
        <Tech name="numpy" icon="tech/numpy.svg" />
        <Tech name="matplotlib" icon="tech/matplotlib.svg" />
        <Tech name="pandas" icon="tech/pandas.svg" />
        <Tech name="OpenCV" icon="tech/opencv.svg" />
        <Tech name="BeautifulSoup" icon="tech/beautifulsoup.svg" />
        <Tech name="Pytorch" icon="tech/pytorch.svg" />

        <Tech name="Github" icon="tech/github.svg" />
        <Tech name="Git" icon="tech/git.svg" />
        <Tech name="Subversion" icon="tech/subversion.svg" />

        <Tech name="Matlab" icon="tech/matlab.png" />
        <Tech name="Mathematica" icon="tech/mathematica.svg" />
        <Tech name="Go" icon="tech/go.svg" />
        <Tech name="WebRTC" icon="tech/webrtc.svg" />
        <Tech name="C++" icon="tech/cpp.svg" />
        <Tech name="C#" icon="tech/csharp.svg" />
        <Tech name="Godot" icon="tech/godot.svg" />
        <Tech name="Unity" icon="tech/unity.svg" />
        <Tech name="MIDI" icon="tech/midi.svg" />
        <Tech name="LaTeX" icon="tech/latex.svg" />
        <Tech name="Notion" icon="tech/notion.svg" />
        <Tech name="Inkscape" icon="tech/inkscape.svg" />
        <Tech name="Excalidraw" icon="tech/excalidraw.svg" />
      </div>
    </div>
  )
}
