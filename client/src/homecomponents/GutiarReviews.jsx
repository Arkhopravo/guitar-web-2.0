// components/GuitarReviews.js
import React, { useState } from "react";

const reviewsData = [
  {
    id: 1,
    title: "Amazing Acoustic Guitar",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Best Electric Guitar for Rock",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Amazing Acoustic Guitar",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "John Doe",
  },
  {
    id: 4,
    title: "Best Electric Guitar for Rock",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Jane Smith",
  },
  {
    id: 5,
    title: "Best Electric Guitar for Rock",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    author: "Jane Smith",
  },

  // Add more reviews as needed
];

const GuitarReviews = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
    <div
      className= "container mx-auto py-8 dark bg-black text-white"
       
        >
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
        
      </button>
      <h2 className="text-3xl font-semibold mb-4 items-center justify-center text-center">Guitar Instrument Reviews</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mr-12 ml-12">
        {reviewsData.map((review) => (
            <div
            key={review.id}
            className="bg-gray-800 text-white p-4 rounded shadow"
            >
            <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
            <p className="text-gray-300">{review.content}</p>
            <p className="mt-2 text-sm text-gray-500">By {review.author}</p>
          </div>
        ))}
      </div>
    </div>
        </>
  );
};

export default GuitarReviews;
