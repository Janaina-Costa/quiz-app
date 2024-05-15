import { LinkButton } from "../../Buttons/LinkButton"
import tagHTML from '../../../assets/icon-html.svg'

export const StartMenu = () =>{
  return(
    <section className="w-full" >
      <header className="text-[--dark-navy] ">
        <h1 className="font-light text-[40px] leading-[48px] " >Welcome to the <span className="font-medium" >Frontend Quiz!</span></h1>
        <p className="text-[--gray-navy] italic text-sm mt-4" >Pick a subject to get started.</p>
      </header>
      <section className="pt-10">
        <LinkButton alt="" icon={tagHTML} text="HTML" className="bg-[#FFF1E9]" />
      </section>
    </section>
  )
}