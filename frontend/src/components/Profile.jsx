import React from 'react'
import { Link } from 'react-router-dom'

const Profile = () => {
  const patient = {
    name: "Ujjwal Karmakar",
    image: "https://www.shutterstock.com/image-photo/adult-successful-confident-employee-business-600nw-2423199809.jpg"
  }

  return (
    <Link to='/profile'>
      <div className='hidden md:flex space-x-2 items-center'>
        <div>
          <img 
            className='w-12 h-12 rounded-full bg-teal-500' 
            src={patient.image} 
            alt={patient.name} 
          />
        </div>
        <span className="text-sm font-medium">{patient.name}</span> {/* Optional: show name */}
      </div>
    </Link>
  )
}

export default Profile
