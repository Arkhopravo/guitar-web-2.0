import React, { useState } from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { TypeAnimation } from 'react-type-animation';
import CodeBlocks from './core/CodeBlocks';
 
function HomeAbout() {
  const [showFullParagraph, setShowFullParagraph] = useState(false);

  const toggleParagraph = () => {
      setShowFullParagraph(!showFullParagraph);
  };


  return (
<>
    {/* BLack 1 */}
   {/* <div className="w-full ">
    <CodeBlocks
     codeblock={``}
     codeColor={"text-yellow-25"}
     backgroundGradient={"code-block1-grad"}
    />
   </div> */}
   
              
{/* Block 2 */}
<div className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
  <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
    <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
      {/* <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl  dark:text-white">Guitar Tutorial hub and online store</h1> */}
    <h1 className="mt-1 text-lg font-semibold md:text-2xl">Guitar Tutorial hub and online store</h1>
      <p class="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Explore New😃</p>
    </div>
    <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
      <img src="https://imagedelivery.net/5ejkUOtsMH5sf63fw6q33Q/0b70b44a-faa0-4a9a-9622-f6ed904e5600/public" alt="" class="w-full h-full object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy"/>
      <img src="https://img.freepik.com/free-photo/3d-rendering-cartoon-like-girl-playing-guitar_23-2150797742.jpg" 
      alt="" class="hidden w-full md:h-full object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
      <img 
            src=
            "https://storage.prompt-hunt.workers.dev/clf927yry0013ky08q96juo0t_1" 
            alt="" 
            className="hidden w-full md:h-full object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy"/>
    </div>
    <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
      <dt className="sr-only">Reviews</dt>
      <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
        <svg width="24" height="24" fill="none" aria-hidden="true" class="mr-1 stroke-current dark:stroke-indigo-500">
          <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <span>4.89 <span class="text-slate-400 font-normal">(128)</span></span>
      </dd>
      <dt className="sr-only">Location</dt>
      <dd className="flex items-center">
       <LiveTvIcon className='m-2 text-indigo-600  items-center'/>
        Live Classes, Recorded Videos
      </dd>
    </dl>
    <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
      <button type="button" class="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
      onClick={toggleParagraph}
      >View More</button>
    </div>
    <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
                    {showFullParagraph
                        ? "Welcome to our guitar tutorial hub and online store! At our website, we're passionate about helping guitar enthusiasts of all levels enhance their skills and find their perfect instrument. Whether you're a beginner eager to learn the basics or an experienced player seeking advanced techniques, we've got you covered with a wide range of tutorials tailored to your needs. Additionally, our store offers a curated selection of high-quality guitars, ensuring that you can find the perfect instrument to match your style and preferences. With our user-friendly interface and expert guidance, you'll be strumming your way to success in no time. Join our community today and embark on your journey to guitar mastery!"
                        : "Welcome to our guitar tutorial hub and online store! At our website, we're passionate..."}
    </p>
  </div>
</div>
    
</>
  )
}

export default HomeAbout