import React from 'react'
import './CoursesItems.scss'
import '../Courses/Courses'
import Courses from '../Courses/Courses';
import { Link, useParams } from 'react-router-dom';
import LearnNav from '../LearnNav/LearnNav';
import useFetch from '../../hooks/useFetch';


const course = [
    {
      id: 1,
      title: "Beginner Course",
      img: "https://cdn.shopify.com/s/files/1/0436/6696/4634/articles/blog-4.jpg?v=1598512934",
      desc: "Welcome to the Beginner Guitar Quick-Start Series. ",
    },
    {
      id: 2,
      title: "Intermediate Course",
      img: "https://cdn.shopify.com/s/files/1/0436/6696/4634/articles/blog-3.jpg?v=1598512920",
      desc: "Welcome to the Intermidiate Guitar Quick-Start Series.",
    },
    {
      id: 3,
      title: "Advanced Course",
      img: "https://cdn.shopify.com/s/files/1/0436/6696/4634/articles/blog-1.jpg?v=1598512449",
      desc: "Welcome to the Advaced Guitar Quick-Start Series.",
      
    },
    {
      id: 4,
      title: "Practice Schedule",
      img: "https://cdn.shopify.com/s/files/1/0436/6696/4634/articles/blog-2.jpg?v=1598512893",
      desc: "An organized weekly itinerary is offered to users for effective planning and progress tracking.",
    },
    

  
  ];
function CoursesItems() {
  // const cat2Id = parseInt(useParams().id);

  // const {data, loading, error} = useFetch(
  //   `/categories?populate=*&[filters][coursecategories][id]=${cat2Id}`
  // );

  return (
    <>
    {/* <LearnNav/> */}
    <div className='courseitem' >
      {/* {error? "Something went wrong" : loading? "loading..." : data.map((item)=> <Courses item={item} key={item.id} /> ) } */}

        {course.map(item =>(
       
            <Courses item={item}  />
        
        ))}
    </div>
        
  </>
  )
}

export default CoursesItems