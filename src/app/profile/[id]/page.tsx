import React from 'react'

const userProfile = ({params}:any) => {
  return (
    <div className=' text-2xl min-h-screen flex items-center justify-center py-2 '>
      <h1>Profile</h1>
      <br/>

      <p className='text-4xl'>This is the profile <span className='ml-4 p-2 rounded bg-orange-500 text-black'>{params.id}</span></p>
      
    </div>
  )
}

export default userProfile;

