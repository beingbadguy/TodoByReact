import { useContext } from 'react';
import { noteContext } from '../context/Context';
const Stats = () => {
  const noteStats = useContext(noteContext);
  let taskLength = noteStats.note.length;
  let actualTask = noteStats.note;
  let statusNum = actualTask.filter((item) => {
    return item.status === true;
  }).length;
  console.log(statusNum);

  return (
    <div
      id='stats'
      className='text-[#C3B49B] text-center border border-[#C3B49B] flex justify-center items-center gap-10 mt-[50px] p-5 w-[350px] rounded-xl   '
    >
      <div className='text-2xl'>
        <p>Task =</p>
        <p className='italic'>keep it up</p>
      </div>
      <div className=' bg-orange-700 w-20 h-20 flex justify-center items-center rounded-[50%]'>
        <p className='text-xl font-bold'>
          {statusNum}/{taskLength}
        </p>
      </div>
    </div>
  );
};
export default Stats;
