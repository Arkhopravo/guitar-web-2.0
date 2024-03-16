import React from 'react'

const Beginners = () => {
  return (
    <div className="container mx-auto p-8 bg-black text-white">
  <h2 className="text-3xl font-semibold mb-4 text-center">Guitar Practice Schedule</h2>

  {/* Daily Schedule */}
  <div className="mb-8">
    <h3 className="text-2xl font-semibold mb-4">Daily Practice Schedule</h3>
    <div className="bg-gray-800 p-4 rounded shadow">
      <ul className="list-inside">
        <li className="mb-2">
          <span className="text-blue-500 font-semibold">10:00 AM - 10:10 AM:</span>{" "}
          Warm-up exercises
        </li>
        <li className="mb-2">
          <span className="text-blue-500 font-semibold">10:15 AM - 10:35 AM:</span>{" "}
          Learn and practice basic chords
        </li>
        <li className="mb-2">
          <span className="text-blue-500 font-semibold">10:40 AM - 10:55 AM:</span>{" "}
          Fingerpicking or strumming exercises
        </li>
        <li className="mb-2">
          <span className="text-blue-500 font-semibold">11:00 AM - 11:15 AM:</span>{" "}
          Play a simple song
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
          <span className="text-blue-500 font-semibold">Monday:</span> Focus on chord transitions and finger exercises (30 minutes)
        </li>
        <li className="mb-2">
          <span className="text-blue-500 font-semibold">Tuesday:</span> Practice scales and music theory (20 minutes)
        </li>
        <li className="mb-2">
          <span className="text-blue-500 font-semibold">Wednesday:</span> Work on a new song (30 minutes)
        </li>
        <li className="mb-2">
          <span className="text-blue-500 font-semibold">Thursday:</span> Review and consolidate what you've learned (20 minutes)
        </li>
        <li className="mb-2">
          <span className="text-blue-500 font-semibold">Friday:</span> Experiment with new techniques (15 minutes)
        </li>
        <li className="mb-2">
          <span className="text-blue-500 font-semibold">Saturday:</span> Play for fun and relax (free play, 30 minutes)
        </li>
        <li>
          <span className="text-blue-500 font-semibold">Sunday:</span> Rest and listen to music (no practice)
        </li>
      </ul>
    </div>
  </div>
</div>

  )
}

export default Beginners