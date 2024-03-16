import React, { useContext } from 'react'
import { DarkModeContext } from '../../context/darkModeContext'
import { Link } from 'react-router-dom';
const HomeCard = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);

  return (
    <div className='md:flex md:flex-row md:pl-2 md:m-3 md:ml-3'>
    {/* item 1 */}
    <div className={`flex max-w-sm mx-28 md:mx-4 ${darkMode ? 'bg-slate-800 shadow-sm hover:bg-slate-900 shadow-gray-100' : "bg-slate-200 shadow-2xl shadow-slate-900"} rounded-xl overflow-hidden border-spacing-1 p-4 m-4 `}>
      <Link to="/tune" className="flex flex-col justify-between">
        <img className="" width={1080} src="https://media.istockphoto.com/id/178111842/photo/guitar.jpg?s=612x612&w=0&k=20&c=5S9_zCTjvFKhkyIIXcpccJL_z_eKlbC_RwJcLNmw4ms=" alt="Guitar Tuner" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Guitar Tuner</div>
          <p className={`text-base font-serif`}>
            Let's tune your favorite instruments with this awesome plugin.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#acousticguitar</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#electricguitar</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bassguitar</span>
        </div>
      </Link>
    </div>
  
    {/* item 2 */}
    <div className={`flex max-w-sm mx-auto md:mx-4 ${darkMode ? 'bg-slate-800 shadow-sm hover:bg-slate-900 shadow-gray-100' : "bg-slate-200 shadow-2xl shadow-slate-900"} rounded-xl overflow-hidden border-spacing-1 p-4 m-4 `}>
      <Link to="/learning" className="flex flex-col justify-between">
        <img className="" width={900} src="https://wallpaperaccess.com/full/3807776.jpg" alt="Guitar Lessons" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Take Lessons</div>
          <p className={`text-base font-serif`}>
            Explore our tutorials and learn more about music and enjoy the world of music.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#solo</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#melodies</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#songs</span>
        </div>
      </Link>
    </div>
  
    {/* item 3 */}
    <div className={`flex max-w-sm mx-28 md:mx-4 ${darkMode ? 'bg-slate-800 shadow-sm hover:bg-slate-900 shadow-gray-100' : "bg-slate-200 shadow-2xl shadow-slate-900"} rounded-xl overflow-hidden border-spacing-1 p-4 m-4 `}>
      <Link to="/matronome" className="flex flex-col justify-between">
        <img className="" width={1080} src="https://guitartopreview.com/wp-content/uploads/2020/02/practice-guitar-with-a-metronome.jpg" alt="metronome" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Metronome</div>
          <p className={`text-base font-serif`}>
            A metronome is a device that produces an audible click or sound at a uniform interval, which can be set by the user. The interval is typically measured in beats per minute (BPM)
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#acousticguitar</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#electricguitar</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bassguitar</span>
        </div>
      </Link>
    </div>
  
    {/* item 4 */}
    <div className={`flex max-w-sm mx-28 md:mx-4 ${darkMode ? 'bg-slate-800 shadow-sm hover:bg-slate-900 shadow-gray-100' : "bg-slate-200 shadow-2xl shadow-slate-900"} rounded-xl overflow-hidden border-spacing-1 p-4 m-4 `}>
      <Link to="/ecommercehome" className="flex flex-col justify-between">
        <img className="" width={1080} src="https://c1.wallpaperflare.com/preview/216/661/239/wall-display-black-and-white-guitar.jpg" alt="Guitar Store" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Guitar Store</div>
          <p className={`text-base font-serif`}>
            Discover a variety of guitars in our store and find your perfect match.
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#acousticguitar</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#electricguitar</span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#bassguitar</span>
        </div>
      </Link>
    </div>
  </div>
  
  )
}

export default HomeCard
