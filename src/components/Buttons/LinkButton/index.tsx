import { useTheme } from "../../../context/useTheme";
import { Icon } from "../../Icon";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  text: string;
  alt: string;
}

export const LinkButton = ({ icon, text, alt, ...props }: IProps) => {
  const {theme} = useTheme()
  return (
    <button
      className={`mb-6 bg-[--pure-white] w-full p-3 rounded-xl 
      flex items-center gap-4 shadow-[0_40px_16px_0_rgba(143,160,193,.14)]
      ]
      ${theme === "dark" && 'dark:bg-[--navy] shadow-none '}
      `}
    >
      <Icon
        icon={icon}
        height={30}
        width={30}
        alt={alt}
        className={`${props.className}  w-[40px] h-[40px]`}
      />
      <span className={`text-lg font-medium text-[--dark-navy] ${theme === "dark" && 'text-[--pure-white]' }`}>{text}</span>
    </button>
  );
};
