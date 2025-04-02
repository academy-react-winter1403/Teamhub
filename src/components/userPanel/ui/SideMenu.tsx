const SideMenu = () => {
  return (
    <div className="w-full h-6/8 flex flex-col justify-evenly items-center">
      <ul className="menu h-full w-9/10 flex justify-evenly">
        <li className="  h-14 cursor-pointer bg-[url(./element-4.svg)] bg-no-repeat bg-right bg-auto flex justify-evenly items-start pr-7">
          <div>Item 1</div>
        </li>
        <li className="w-full h-14 cursor-pointer bg-[url(./book.svg)] bg-no-repeat bg-right bg-auto flex justify-evenly items-start pr-7">
          <div>Item 2</div>
        </li>
        <li className="w-full h-14 cursor-pointer bg-[url(./heart.svg)] bg-no-repeat bg-right bg-auto flex justify-evenly items-start pr-7">
          <div>Item 3</div>
        </li>
        <li className="w-full h-14 cursor-pointer bg-[url(./messages-2.svg)] bg-no-repeat bg-right bg-auto flex justify-evenly items-start pr-7">
          <div>Item 3</div>
        </li>
        <li className="w-full h-14 cursor-pointer bg-[url(./user-edit.svg)] bg-no-repeat bg-right bg-auto flex justify-evenly items-start pr-7">
          <div>Item 3</div>
        </li>
        <li className="w-full h-14 cursor-pointer bg-[url(./logout.svg)] bg-no-repeat bg-right bg-auto flex justify-evenly items-start pr-7">
          <div>Item 3</div>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
