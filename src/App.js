import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react';

function App() {

  const [myPrompt , setPrompt] = useState('')
  const [img , setIMG] = useState('')

  const generate = async()=>{
    const response = await fetch('https://api.openai.com/v1/images/generations',
      {
        method:'POST',
        headers:{
          'content-type':'application/json',
          Authorization:'Bearer YOUR_SECRET_KEY' // قم بوضع الكود الخاص بك
        },
        body:JSON.stringify({
          prompt:myPrompt,
          size:'512x512',
          n:1
        })
      }
    )

    let data = await response.json()
    setIMG(data.data[0].url)
  }

  return (
    <div className="container">
      <div className='card w-50 mx-auto mt-5'>
        <div className='card-body'>
          <img src={img} className='w-100'/>
          <input placeholder='Insert Prompt' className='form-control' onChange={e=>setPrompt(e.target.value)}/>
        </div>
        <div className='card-footer'>
          <button className='btn btn-primary' onClick={()=>generate()}>Generate</button>
        </div>
      </div>
    </div>
  );
}

export default App;
