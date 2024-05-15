import { QuestionTopic } from "./QuestionTopic";
import moon from "../../assets/icon-moon-dark.svg";
import sun from "../../assets/icon-sun-dark.svg";
import { Icon } from "../Icon";
import { SwitchButton } from "./SwitchButton";

export const Header = () => {
  return (
    <header className="w-full h- flex flex-1 gap-4 justify-between py-4 px-6 border border-b-2">
      <QuestionTopic topic="Acessibilidade" />

      <div className="flex items-center gap-2 ">
        <Icon alt="" icon={sun} width={16} height={16} />
        <SwitchButton />
        <Icon alt="" icon={moon} width={16} height={16} />
      </div>
    </header>
  );
};
