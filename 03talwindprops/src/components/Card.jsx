import React from 'react'


function Card({username , btnText}) {
  return (
    <div className="w-64 rounded-xl bg-white p-5 shadow-lg">
      <img
        src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400"
        alt="Laptop on a desk"
        className="h-40 w-full rounded-lg object-cover"
      />

      <h2 className="mt-4 text-xl font-bold text-black">
        Web Development
      </h2>

      <p className="mt-2 text-gray-600">
        {username}
      </p>

      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white">
        {btnText}
      </button>
    </div>
  )
}

export default Card


