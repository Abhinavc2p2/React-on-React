import {useState,useCallback,useEffect,useRef} from 'react'
function App() {

  const[length,setlength]=useState(8);
  const[noall,notall]=useState(false);
  const[chall,notcharall]=useState(false);
  const[Password,setpassword]=useState("")
  

  const passref=useRef(null)
  const copypassword=useCallback(()=>{
    

    window.navigator.clipboard.writeText(Password)

  } , )


  const passgenrator=useCallback(()=>{
    let pass=""
    let string="QWERTYUIOPLMKJNHBGVFCDXSZAqwertyuioplkjhgfdsazxcvbnm"

    if(noall) string+="1234567890"
    if(chall) string+=")(&*^%$#@!<>?}{[]|"

    for(let i=1;i<=length;i++){
     let char =Math.floor(Math.random()*string.length+1)

     pass+=string.charAt(char)
    }
    setpassword(pass)
  },[length,noall,chall,setpassword])

  useEffect(()=>{
    passgenrator()
  },[length,noall,chall,passgenrator])

  return (
    <>
  <div className="w-full max-w-md mx-auto rounded-lg px-4  py-3  my-5 text-orange-500 bg-blue-500">
    <h1 className='text-white text-center text-lg my-3'>Password Genrator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input type="text" value={Password} className=' outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passref} />
      <button   onClick={copypassword} className=' text-white bg-black px-3'>Copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" min={6} max={100} 
        value={length} className='cursor-pointer'  onChange={(e)=>{setlength(e.target.value)}}/>
        <label  className='text-white bg-grey'>Length {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"  defaultChecked={noall}  onChange={()=>{notall((prev)=>!prev);}}/><label className='text-white' >Numbers</label>
      </div>

      <div className="flex items-center gap-x-1">
        <input type="checkbox"  defaultChecked={chall}   onChange={()=>{notcharall((prev)=>!prev);}}/><label className='text-white'>Character</label>
      </div>
    </div>
  </div>
    </>
  )
}

export default App
