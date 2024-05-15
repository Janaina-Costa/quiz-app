import { Icon } from "../../Icon";
import iconAccessibility from "../../../assets/icon-accessibility.svg"

interface IProps {
  topic: string;
  className?: string;
}

export const QuestionTopic = ({ topic }: IProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Icon alt="teste" icon={iconAccessibility} width={30} height={30} className=" w-[40px] h-[40px] bg-[#F6E7FF]"/>
      <p className={`text-[--dark-navy] font-medium text-lg`}>{topic}</p>
    </div>
  );
};
