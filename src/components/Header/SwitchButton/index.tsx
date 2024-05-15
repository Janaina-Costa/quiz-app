export const SwitchButton = () => {
  const buttonsIcons = [
    {
      leftSwitchButton(fill: string = "#A729F5") {
        return (
          <svg
            width="32"
            height="20"
            viewBox="0 0 48 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="28" rx="14" fill={fill} />
            <circle cx="14" cy="14" r="10" fill="white" />
          </svg>
        );
      },
    },
    // {
    //   rightSwitchButton(fill:string = "#A729F5") {
    //     return (
    //       <svg
    //         width="32"
    //         height="20"
    //         viewBox="0 0 48 28"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <rect width="48" height="28" rx="14" fill={fill} />
    //         <circle cx="34" cy="14" r="10" fill="white" />
    //       </svg>
    //     );
    //   },
    // },
  ];

  return <>{buttonsIcons.map((btn) => btn.leftSwitchButton())}</>;
};
