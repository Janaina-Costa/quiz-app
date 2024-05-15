import { Header } from "./components/Header"
import { Main } from "./components/Modules"

function App() {
  return(
    <div className={`
    h-screen 
    bg-mobile-light-bg tablet:bg-tablet-light-bg desktop:bg-desktop-light-bg
    bg-cover bg-no-repeat
    `}>      
        <Header/>
        <Main/>

    </div>
  )
}

export default App
