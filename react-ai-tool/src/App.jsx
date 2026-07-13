import { useState } from 'react'
import './App.css'

function App() {

  const [question,setQuestion]=useState('');
  

  const askQuestion=()=>{
    let response=await fetch(URL)
    console.log(question);
    
  }
  
  return (
   <div className='grid grid-cols-5 h-screen text-center'>
    <div className='col-span-1 bg-zinc-700'>

    </div>

    <div className='col-span-4'>
      <div className='container h-130'>

      </div>
      <div className='bg-zinc-800 w-1/2 p-1 pr-5 text-white m-auto rounded-4xl border border-blue-400 h-16 flex'>
        <input type="text" value={question} onChange={(event)=>setQuestion(event.target.value)} className='w-full h-full p-3 outline-none' placeholder='Ask me anything' />
        <button onClick={askQuestion}>Ask</button>
      </div>
    </div> 
   </div>
  )
}

export default App
