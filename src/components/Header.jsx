import { RiMenuFoldFill } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
const Header = () => {
  const [menu, setmenu] = useState(true);

  return (
    <>
      <div className='text-white  flex justify-start lg:justify-between items-center gap-[220px] lg:gap-[1200px] mt-10'>
        <div>
          <h1 className='text-xl font-bold  text-[#C3B49B]'>
            Hero<span className=' text-orange-700'>TODO</span>
          </h1>
        </div>
        <div
          onClick={() => {
            setmenu(false);
          }}
        >
          <RiMenuFoldFill className='text-orange-700 h-6 w-6 cursor-pointer' />
        </div>
      </div>

      <div
        className={`absolute bg-black h-screen w-[100%] top-0 left-0 text-[#C3B49B] z-10 transition ${
          menu ? 'translate-y-[-100%]' : 'translate-y-[0%]'
        } `}
      >
        <ul className='mt-20 flex items-start flex-col m-10 gap-4'>
          <li className='underline'>How does this work</li>
          <li>Delete: Click on delete icon to delete the task</li>
          <li>Done: Click on circle to mark the task as done</li>
          <li
            onClick={() => {
              setmenu(true);
            }}
          >
            <AiOutlineClose className='text-orange-700 h-8 w-8 absolute bottom-20 left-[45%] cursor-pointer' />
          </li>
        </ul>
      </div>
    </>
  );
};
export default Header;
