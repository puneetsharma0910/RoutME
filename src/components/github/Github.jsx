import React, { useEffect, useState } from 'react'

const Github = () => {
    const [data, setdata] = useState({})
    useEffect(() => {
       fetch(`https://api.github.com/users/puneetsharma0910`)
       .then(response => response.json())
       .then(data =>{
        setdata(data)
       })
    }, [])
    
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl shadow-lg p-8 m-5">
      <img
        className="w-36 h-36 rounded-full border-4 border-white shadow-md mb-4 object-cover"
        src={data.avatar_url}
        alt={data.name || "GitHub Avatar"}
      />
      <h2 className="text-2xl font-bold text-white mb-1">{data.name}</h2>
      <p className="text-gray-300 mb-2">@{data.login}</p>
      <div className="flex gap-6 text-white text-lg mb-4">
        <span>
          <span className="font-semibold">{data.followers}</span> Followers
        </span>
        <span>
          <span className="font-semibold">{data.following}</span> Following
        </span>
        <span>
          <span className="font-semibold">{data.public_repos}</span> Repos
        </span>
      </div>
      <a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow transition"
      >
        View Profile
      </a>
    </div>
  ) 
}

export default Github