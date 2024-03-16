import React from 'react'

const Intermediate = () => {
  return (
    <div className="container mx-auto p-8 bg-black text-white">
    <h2 className="text-3xl font-semibold mb-4 text-center">
      Intermediate Guitar Practice Schedule
    </h2>
  
    {/* Daily Schedule */}
    <div className="mb-8">
      <h3 className="text-2xl font-semibold mb-4">Daily Practice Schedule</h3>
      <div className="bg-gray-800 p-4 rounded shadow">
        <ul className="list-inside">
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">10:00 AM - 10:15 AM:</span>{" "}
            Warm-up exercises
          </li>
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">10:20 AM - 10:40 AM:</span>{" "}
            Advanced chord progressions and transitions
          </li>
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">10:45 AM - 11:05 AM:</span>{" "}
            Fingerstyle techniques
          </li>
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">11:10 AM - 11:30 AM:</span>{" "}
            Explore improvisation and soloing
          </li>
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">11:35 AM - 11:50 AM:</span>{" "}
            Play and analyze complex songs
          </li>
        </ul>
      </div>
    </div>
  
    {/* Weekly Schedule */}
    <div>
      <h3 className="text-2xl font-semibold mb-4">Weekly Practice Schedule</h3>
      <div className="bg-gray-800 p-4 rounded shadow">
        <ul className="list-inside">
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">Monday:</span> Jazz chord progressions and theory (30 minutes)
          </li>
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">Tuesday:</span> Advanced scales and arpeggios (20 minutes)
          </li>
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">Wednesday:</span> Practice complex solos (30 minutes)
          </li>
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">Thursday:</span> Explore fingerstyle arrangements (20 minutes)
          </li>
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">Friday:</span> Creative songwriting and composition (30 minutes)
          </li>
          <li className="mb-2">
            <span className="text-blue-500 font-semibold">Saturday:</span> Collaborate with other musicians (free play, 30 minutes)
          </li>
          <li>
            <span className="text-blue-500 font-semibold">Sunday:</span> Rest and enjoy your guitar journey!
          </li>
        </ul>
      </div>
    </div>
  </div>
  
  
  )
}

export default Intermediate