import { QuestionTopic } from "./QuestionTopic";
import moonDark from "../../assets/icon-moon-dark.svg";
import moonLight from "../../assets/icon-moon-light.svg";
import sunLight from "../../assets/icon-sun-dark.svg";
import sunDarck from "../../assets/icon-sun-light.svg";


import { Icon } from "../Icon";
import { SwitchButton } from "./SwitchButton";
import { useTheme } from "../../context/useTheme";

export const Header = () => {
  const { theme } = useTheme();
  return (
    <header className="w-full h- flex flex-1 gap-4 justify-between ">
      <QuestionTopic
        topic="Acessibilidade"
        className={`${theme === "dark" && "dark:text-[--pure-white]"}`}
      />

      <div className="flex items-center gap-2 ">
        <Icon alt="" icon={theme ==='dark'?sunDarck :sunLight} width={16} height={16} />
        <SwitchButton />
        <Icon alt="" icon={theme === "dark"?moonLight : moonDark} width={16} height={16} />
      </div>
    </header>
  );
};
