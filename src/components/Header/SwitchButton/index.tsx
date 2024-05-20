import { useTheme } from "../../../context/useTheme";


export const SwitchButton = () => {
  const {theme, toggleTheme} = useTheme()
 
  return (
    <button onClick={toggleTheme} className={``}>
      {theme === "dark" ? <RightSwitchIcon /> : <LeftSwitchIcon />}
    </button>
  );
};
interface IProps {
  fill?: string;
}

const LeftSwitchIcon = ({ fill }: IProps) => {
  return (
    <svg
      width="32"
      height="20"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="28" rx="14" fill={fill ?? "#A729F5"} />
      <circle cx="14" cy="14" r="10" fill="white" />
    </svg>
  );
};

function RightSwitchIcon({ fill }: IProps) {
  return (
    <svg
      width="32"
      height="20"
      viewBox="0 0 48 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="28" rx="14" fill={fill ?? "#A729F5"} />
      <circle cx="34" cy="14" r="10" fill="white" />
    </svg>
  );
}
