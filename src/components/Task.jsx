import { MdDelete } from 'react-icons/md';
// import { useState } from 'react';
import { useContext } from 'react';
import { noteContext } from '../context/Context';
const Task = () => {

  const noteRef = useContext(noteContext);
  let actualNote = noteRef.note;

  return (
    <div className='text-white  flex flex-col md:flex-row md:flex-wrap   gap-10  mb-20 justify-center '>
      {actualNote.map((item, index) => (
        <div
          key={index}
          className='flex items-center justify-between gap-10 border border-[#C3B49B] p-5 rounded-xl w-[350px] font-bold '
        >
          <div
            onClick={() => {
              let noteNew = [...actualNote];
              noteNew[index].status = !noteNew[index].status;
              noteRef.setnote(noteNew);
              console.log(actualNote);
            }}
            className={` bg-${
              actualNote[index].status ? 'green-700' : '[#C3B49B]'
            }  w-[20px] h-[20px] absolute rounded-full cursor-pointer`}
          ></div>
          <h1
            key={index}
            className={`text-[#C3B49B] ml-10  text-left text-md bg-red ${
              actualNote[index].status ? 'line-through' : ''
            }`}
          >
            {item.body}
          </h1>
          <div
            onClick={() => {
              console.log('item Deleted');
              console.log(index);
              let deltArr = [...actualNote];
              deltArr.splice(index, 1);
              noteRef.setnote(deltArr);
            }}
          >
            <MdDelete className='text-[#C3B49B] w-8 h-8 cursor-pointer  ' />
          </div>
        </div>
      ))}
    </div>
  );
};
export default Task;
