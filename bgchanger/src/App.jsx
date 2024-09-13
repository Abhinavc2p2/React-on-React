

import {useState} from 'react'
function App() {
  const [color, setColor] = useState('');

  return (
    <div className="w-full h-screen duration-200 " style={{ backgroundColor: color }}>

      <div className="fixed flex flex-wrap justify-center bottom-36 inset-x-5 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-md bg-white px-4 py-2 rounded-xl  p-4 " >
          <button className= ' outline-none  px-4  py-1 rounded-full p-4 ' style={{backgroundColor:'red'}} onClick={() => setColor('red')}>Red</button>
          <button className= ' outline-none  px-4  py-1 rounded-full p-4 ' style={{backgroundColor:'orange'}} onClick={() => setColor('orange')}>Orange</button>
          <button className= ' outline-none  px-4  py-1 rounded-full p-4 ' style={{backgroundColor:'Green'}}  onClick={() => setColor('Green')}>Green</button>
          <button className= ' outline-none  px-4  py-1 rounded-full p-4 ' style={{backgroundColor:'purple'}} onClick={() => setColor('Purple')} >Purple</button>
          <button className= ' outline-none  px-4  py-1 rounded-full p-4 ' style={{backgroundColor:'Yellow'}} onClick={() => setColor('Yellow')} >Yellow</button>
          <button className= ' outline-none  px-4  py-1 rounded-full p-4 ' style={{backgroundColor:'Blue'}} onClick={() => setColor('Blue')} >Blue</button>
          <button className= ' outline-none  px-4  py-1 rounded-full p-4 ' style={{backgroundColor:'OLIVE'}}onClick={() => setColor('olive')}  >olive</button>
        </div>
      </div>

    </div>
  );
}

export default App
