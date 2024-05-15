interface IProps {
  alt: string;
  className?: string;
  icon: string;
  height: number | string;
  width: number | string;
}

export const Icon = ({ icon, className, alt, height, width }: IProps) => {
  return (
    <figure className={`${className} flex items-center 
    justify-center rounded-md`}
    >
      <img src={icon} alt={alt} width={width} height={height}/>
    
    </figure>
  );
};
