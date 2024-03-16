import React, { useState } from 'react';
import './Lessons.scss'
import LearnNav from '../../../componentslearning/LearnNav/LearnNav'
import LearnFooter from '../../../componentslearning/LearnFooter/LearnFooter'
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import HomeLayout from '../../../homecomponents/HomeLayout';

const courses = [
  {
    id: 1,
    title: "Introduction to Guitar",
    vid: "/public/videos/video1.mp4",
    desc: "Introduction to Guitar",
    longDesc: "",
  },
  {
    id: 2,
    title: "Choosing the Right Guitar: Right-Handed vs Left-Handed",
    vid: "/public/videos/guitarvid2.mp4",
    desc: "Choosing the Right Guitar: Right-Handed vs Left-Handed",
    // longDesc: ...
  },
  {
    id: 3,
    title: "Essential Accessories for Acoustic Guitar",
    vid: "/public/videos/guitarvid3.mp4",
    desc: "Essential Accessories for Acoustic Guitar",
    // longDesc: ...
  },
  {
    id: 4,
    title: "Essential Accessories for Electric Guitar",
    vid: "/public/videos/guitar5.mp4",
    desc: "Essential Accessories for Electric Guitar",
  },
  {
    id: 5,
    title: "Parts of the Guitar (Electric)",
    vid: "/public/videos/guitar6.mp4",
    desc: "Parts of the Guitar (Electric)",
  },
  {
    id: 6,
    title: "Chord Block Diagrams and Fretboard Maps",
    vid: "/public/videos/guitar7.mp4",
    desc: "Chord Block Diagrams and Fretboard Maps",
  },
  {
    id: 7,
    title: "A Minor and E Major Chords",
    vid: "/public/videos/guitar8.mp4",
    desc: "A Minor and E Major Chords",
  },
  {
    id: 8,
    title: "String Names and Numbers",
    vid: "/public/videos/guitar9.mp4",
    desc: "String Names and Numbers",
  },
  {
    id: 9,
    title: "Tuning Your Guitar with a Tuner",
    vid: "/public/videos/guitar10.mp4",
    desc: "Tuning Your Guitar with a Tuner",
  },
  {
    id: 10,
    title: "Tuning Your Guitar by Matching",
    vid: "/public/videos/guitar11.mp4",
    desc: "Tuning Your Guitar by Matching",
  },
];

const Lessons = () => {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [showLessonList, setShowLessonList] = useState(false); 

  const handleLessonClick = (courseIndex) => {
    setCurrentLessonIndex(courseIndex);
  };

  const handleNextClick = () => {
    // Increment the currentLessonIndex to move to the next lesson
    if (currentLessonIndex < courses.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1);
    }
  };

  const currentLesson = courses[currentLessonIndex];

  const toggleLessonList = () => {
    setShowLessonList(!showLessonList);
  };

  return (
    <>
      <HomeLayout>
       
      <div className="lessons">
        
      <div className="left-side">
        <div className="">

        <button className="toggle-button" onClick={toggleLessonList}>
          {showLessonList ? 'Hide Lessons' : 'Show Lessons'}
        </button>
        <ul className={showLessonList ? 'show-lesson-list' : 'hide-lesson-list'}>
          {courses.map((course, index) => (
            <li key={course.id} onClick={() => handleLessonClick(index)}
            className={currentLessonIndex === index ? 'current-lesson' : ''}
            
            >
               {course.title}
            </li>
          ))}
        </ul>
          </div>
      </div>
      <div className="right-side">
        {currentLesson && (
          <>
            <video src={currentLesson.vid} controls className=' aspect-video hover:aspect-4/3' />
            <h1>{currentLesson.desc}</h1>
          </>
        )}
        <button onClick={handleNextClick} className='next-button'>
        <span class="text">Next</span>
  <svg class="arrow" viewBox="0 0 448 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>
        </button>
      </div>
    </div>

   
      
    </HomeLayout>
    </>
  );
};

export default Lessons;


