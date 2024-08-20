// import React from 'react'
// // step 1: import useState hook
// import { useState } from 'react'


// const App = () => {
//   // step 2: declare state variable and fucntion
//   const [nameState, setNameState] = useState('Mr Stephen')
//   const [cars, setCars] = useState(3)
//   const [houses, setHouses] = useState(3)
//   const [job, setJob] = useState('software developer')

//   // step3: create event
//   const toggleState = () => {
//     if(nameState === 'Mr Stephen'){
//     setNameState('Chief Stephen')
//     setCars(5)
//     setHouses(7)
//     setJob('frontend developer')
//   } else{
//     setNameState('Mr Stephen')
//     setCars(3)
//     setHouses(3)
//     setJob('software developer')
//   }
//   }
  
//   return (
//     <div>
//       <h1>Hello i'm {nameState}, I have {cars} cars and {houses} houses, i am a {job}</h1>
//       <button onClick={toggleState} className='ring p-2 rounded'>Change</button>
//       {/* <button onClick={reset} className='ring p-2 rounded'>Change</button> */}
//     </div>
//   )
// }

// export default App



import React from 'react'
import { useState } from 'react'


const App = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
       e.preventDefault()
       const formData = {email, password}
       console.log(formData);
  
}


  return (
    <div className='bg-slate-100 min-h-screen flex items-center justify-center'>

      
      <form action="" className='border-b-4 border-b-red-500 min-w-[400px] p-3  bg-slate-50 rounded' onSubmit={submitForm} >
      <div className='flex justify-between items-center mb-5'>
        <label htmlFor="email">Email Address:</label>
        <input 
        value={email} 
        onChange={e => setEmail(e.target.value)}
        type="email" 
        name='email' 
        id='email' 
        placeholder='enter your email address' 
        className='rounded p-1 m-1'/>
        </div>

        <div className='flex justify-between items-center'>
        <label htmlFor="password">password:</label>
        <input 
        value={password} 
        onChange={e => setPassword(e.target.value)}
        type="password" 
        name='password' 
        id='password' 
        placeholder='enter your password' 
        className='rounded p-1 m-1' />
        </div>

        <button className='w-full rounded bg-black text-white hover:tracking-wide mt-3 py-2  hover:bg-gray-900' type='submit'>Login</button>
      </form>
    </div>
  )
}

export default App
