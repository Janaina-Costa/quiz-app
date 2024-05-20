import { Header } from "./components/Header";
import { Main } from "./components/Modules";
import { useTheme } from "./context/useTheme";

function App() {
  const { theme } = useTheme();
  return (
    <div
      className={`
    h-screen pt-4 px-6 
    bg-mobile-light-bg tablet:bg-tablet-light-bg desktop:bg-desktop-light-bg
    ${
      theme === "dark" &&`
      dark:bg-mobile-dark-bg 
      dark:tablet:bg-tablet-dark-bg 
      dark:desktop:bg-desktop-dark-bg 
      bg-[--dark-navy] 
      
      
      `
    }
    bg-cover bg-no-repeat
    tablet:pt-14 tablet:px-16
    desktop:pt-20 desktop:px-36 
    `}
    >
      <div className="desktop:max-w-6xl m-auto">
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;
