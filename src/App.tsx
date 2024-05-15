import { Header } from "./components/Header"

function App() {
  return(
    <main className={`
    h-screen 
    bg-mobile-light-bg tablet:bg-tablet-light-bg desktop:bg-desktop-light-bg
    bg-cover bg-no-repeat
    `}>
  
      
        <Header/>

    </main>
  )
}

export default App
