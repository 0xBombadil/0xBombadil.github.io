import Image from "next/image"
import styles from "./page.module.css"
import PreviousCompany from "@/components/PreviousCompanies/PreviousCompany/PreviousCompany"
import PreviousCompanies from "@/components/PreviousCompanies/PreviousCompanies"
import TechStack from "@/components/TechStack/TechStack"
import Tech from "@/components/TechStack/Tech/Tech"

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <h1>Bombadil</h1>
        <sub>Software Engineer</sub>
      </div>
      <PreviousCompanies>
        <PreviousCompany name="ZKasino" icon="zk.svg" />
        <PreviousCompany name="ZigZag Labs" icon="zzlabs.svg" />
        <PreviousCompany name="STFX" icon="stfx.svg" />
        <PreviousCompany name="ZigZag Exchange" icon="zzexchange.svg" />
      </PreviousCompanies>

      <TechStack>
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
      </TechStack>
      {/* <div>
        <h3>Web</h3>
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

        <h3>Version Control and Deployment</h3>
        <ul>
          <li>Vercel</li>
          <li>Github</li>
          <li>Git</li>
          <li>Subversion</li>
        </ul>

        <h3>Testing</h3>
        <ul>
          <li>Playwright</li>
          <li>Dappwright</li>
        </ul>

        <h3>Web3</h3>
        <ul>
          <li>Ethers.js</li>
          <li>Viem</li>
        </ul>

        <h3>3D and Graphics</h3>
        <ul>
          <li>Three.js</li>
          <li>React Fiber</li>
          <li>WebGL</li>
          <li>GLSL</li>
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
      </div> */}
    </main>
  )
}
