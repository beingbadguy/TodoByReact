import Header from './components/Header';
import Stats from './components/Stats';
import Todo from './components/Todo';
import Task from './components/Task';
function App() {
  return (
    <div className='min-h-[94vh] md:min-h-[100vh]  bg-black  flex flex-col text-center items-center select-none overflow-x-hidden'>
      <Header />
      <Stats />
      <Todo />
      <Task />
    </div>
  );
}

export default App;
