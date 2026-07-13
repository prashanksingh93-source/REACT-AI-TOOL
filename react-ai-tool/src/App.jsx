import { useState } from 'react'
import './App.css'


function App() {

  const [question,setQuestion]=useState('');
  
   const payload={
    "contents": [
      {
        "parts": [
          {
            "text": "Explain how AI works in a few words"
          }
        ]
      }
    ]}
  const askQuestion = async () => {
  let response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-goog-api-key": "AQ.Ab8RN6Lq0vWSggCZZ8u0f9QK_mqYYfkuVnW3hgg3xFcJFKKl7w",
    },
    body: JSON.stringify(payload),
  });

  response = await response.json();
  console.log(response);
};
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


export default App
