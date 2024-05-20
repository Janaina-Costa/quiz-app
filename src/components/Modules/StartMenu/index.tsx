import { LinkButton } from "../../Buttons/LinkButton";
import tagHTML from "../../../assets/icon-html.svg";
import { useTheme } from "../../../context/useTheme";

export const StartMenu = () => {
  const {theme } = useTheme()
  return (
    <div
      className="w-full flex flex-col 
      desktop:flex-row desktop:justify-between "
    >
      <header className="text-[--dark-navy]  desktop:max-w-[448px] tablet:max-w-[448px] ">
        <h1
          className={`font-light text-[2.5rem] leading-[48px] desktop:text-6xl tablet:text-6xl
          ${theme === 'dark'&& 'text-[--pure-white]'}
          `}
        >
          Welcome to the <span className="font-medium">Frontend Quiz!</span>
        </h1>
        <p className={`text-[--gray-navy] italic text-sm mt-4 desktop:text-xl tablet:text-x
         ${theme === 'dark'&& 'text-[--light-bluish]'}
        `}>
          Pick a subject to get started.
        </p>
      </header>

      <section className="pt-10 desktop:w-[564px] desktop:pt-0">
        <LinkButton
          alt=""
          icon={tagHTML}
          text="HTML"
          className="bg-[#FFF1E9]"
        />
        <LinkButton
          alt=""
          icon={tagHTML}
          text="HTML"
          className="bg-[#FFF1E9]"
        />
        <LinkButton
          alt=""
          icon={tagHTML}
          text="HTML"
          className="bg-[#FFF1E9]"
        />
        <LinkButton
          alt=""
          icon={tagHTML}
          text="HTML"
          className="bg-[#FFF1E9]"
        />
      </section>
    </div>
  );
};
