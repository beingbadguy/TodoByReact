import { IoIosAddCircle } from 'react-icons/io';
import { useContext, useRef } from 'react';
import { noteContext } from '../context/Context';

const Todo = () => {
  const updatedNote = useContext(noteContext);
  let newTask = updatedNote.note;

  const inputRef = useRef();
  let newTaskHandler = () => {
    let inpVal = inputRef.current.value;
    if (inpVal) {
      const arr = [...newTask, { body: inpVal, status: false }];
      updatedNote.setnote(arr);
      inputRef.current.value = '';
      console.log(newTask);
    } else {
      alert('enter some task');
    }
  };

  return (
    <div className='text-white my-10'>
      <div className='flex gap-2 items-center'>
        <input
          ref={inputRef}
          type='text'
          name=''
          id=''
          className='bg-[#1E1E1E] text-[#C3B49B] outline-none p-2 w-[300px] rounded lg:w-[500px]'
          placeholder='Enter your task'
        />
        <div
          onClick={() => {
            newTaskHandler();
          }}
        >
          <IoIosAddCircle className='text-orange-700 w-10 h-10 cursor-pointer' />
        </div>
      </div>
    </div>
  );
};
export default Todo;
