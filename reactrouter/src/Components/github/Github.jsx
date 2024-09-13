

// import {useEffect,useState} from 'react'
import { useLoaderData } from  'react-router-dom'
function Github() {
// const [data,setdata]=useState([])
//     useEffect(()=>{
//         fetch('https://api.github.com/users/Abhinavc2p2').then(res=>res.json()).then(data=>{console.log(data);
//             setdata(data)
//         })
//     })
const  data=useLoaderData()


  return (

    <>
    
    
    
    <div className="bg-gray-500  px-5 py-5 text-center text-white">
        Github followers:{data.followers}
        <img src={data.avatar_url} alt="" className='h-200  w-200' />
    </div>
    </>
  )
}

export default Github


export  const githubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/Abhinavc2p2')

    return response.json()
  
}