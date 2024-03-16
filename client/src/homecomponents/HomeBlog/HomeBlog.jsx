// HomeBlog.js
import React, { useContext, useState } from "react";
import { Transition } from "@headlessui/react";
import { DarkModeContext } from "../../context/darkModeContext";


const blogs = [
  { 
    id: 1,
    title: "Blog 1", 
    content: "Learn the basics of guitar tuning and keep your instrument sounding perfect", 
    imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" 
  },
  { 
    id: 2, 
    title: "Blog 2", 
    content: "Discover essential chord shapes for beginners to start playing your favorite songs", 
    imageUrl: "https://www.adaptnetwork.com/wp-content/uploads/2016/02/what-are-the-elements-of-photography-1040x585.jpg" 
  },
  { 
    id: 3, 
    title: "Blog 3", 
    content: "Explore the history of iconic guitar brands and find the perfect one for you.", 
    imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" 
  },
  { 
    id: 4, 
    title: "Blog 4", 
    content: "Master the art of strumming patterns to add rhythm and dynamics to your playing.", 
    imageUrl: "https://www.adaptnetwork.com/wp-content/uploads/2016/02/what-are-the-elements-of-photography-1040x585.jpg" 
  },
  { 
    id: 5, 
    title: "Blog 5", 
    content: "Unlock the secrets of fingerstyle technique and create beautiful melodies.", 
    imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" 
  },
  { 
    id: 1, 
    title: "Blog 6", 
    content: "Dive into the world of guitar effects pedals and enhance your sound.", 
    imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" 
  },
  { 
      id: 2, 
      title: "Blog 7", 
    content: "Explore different types of guitar picks and find the right one for your style", 
    imageUrl: "https://www.adaptnetwork.com/wp-content/uploads/2016/02/what-are-the-elements-of-photography-1040x585.jpg" 
  },
  { 
      id: 3, 
      title: "Blog 8", 
    content: "Learn how to read guitar tablature and play your favorite songs.", 
    imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" 
  },
  { 
      id: 4, 
      title: "Blog 9", 
    content: "Discover the benefits of practicing scales and improve your speed and dexterity.", 
    imageUrl: "https://www.adaptnetwork.com/wp-content/uploads/2016/02/what-are-the-elements-of-photography-1040x585.jpg" 
  },
  { 
      id: 5, 
      title: "Blog 10", 
    content: "Explore the fascinating world of guitar maintenance and keep your instrument in top condition.", 
    imageUrl: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg" 
  },
];

const HomeBlog = () => {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousBlog = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  const nextBlog = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === blogs.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={`${darkMode? 'bg-gray-800' : 'bg-gray-300'}  md:flex items-center justify-center py-4 px-8 rounded-lg shadow-lg`}>
      <Transition
        show={true}
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className="md:flex md:flex-row h-3/4 w-4/3 justify-center items-center">
          {[...Array(3)].map((_, index) => {
            const blogIndex = (currentIndex + index) % blogs.length;
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center mx-4"
              >
                <img
                  src={blogs[blogIndex].imageUrl}
                  alt="Blog"
                  className="mb-4 rounded-lg"
                />
                <h2 className={`${darkMode? 'text-white' : 'text-slate-900'}  text-2xl font-bold mb-2`}>
                  {blogs[blogIndex].title}
                </h2>
                <p className={`${darkMode? "text-gray-300" : 'text-gray-800'} mb-4`}>
                  {blogs[blogIndex].content}
                </p>
              </div>
            );
          })}
        </div>
      </Transition>
      <div className="flex items-center justify-center space-x-4 mt-4">
        <button
          className={`${darkMode? "bg-gray-600 hover:bg-gray-700 text-white":"bg-gray-100 hover:bg-gray-400 text-black "} px-4 py-2 rounded-lg`}
          onClick={previousBlog}
        >
          Previous
        </button>
        <button
          className={`${darkMode? "bg-gray-600 hover:bg-gray-700 text-white": "bg-gray-100 hover:bg-gray-400 text-black"} px-4 py-2 rounded-lg`}
          onClick={nextBlog}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default HomeBlog;
