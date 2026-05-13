import './Projects.css'
import arrow from '../../assets/Images/Arrow - Down - .svg'
import { useEffect, useState } from 'react';
const Projects = () => {
    const[projects,setProjects]=useState([]);

    useEffect(()=>{
         fetch('/projects.json')
         .then(res=>res.json())
         .then(data=>setProjects(data))
    },[]);

    return (
        <div className='main-container'>
            <div className='project-container'>
            <div className='top-content'>
                <div className='text-content'>
                 <h1>Our Projects: </h1>
                <h1>Building a Legacy of Success</h1>
                <p>Delivering innovative real estate solutions across residential,
                     commercial, and luxury sectors.</p>
              </div>
              <div className='btn-container'>
                <button className='view-btn'>
                    View All 
                    <img src={arrow} alt="Arrow"></img>
                </button>
              </div>
              <div>
              </div>
           </div>
           {/* cards container */}
           <div className='card-container'>
            {
                projects.slice(0,4).map(project=>(
                     <div key={project.id} className='cards'>
                        <img src={project.image}></img>
                        <h1>{project.projectName}</h1>
                   <div className='btn-detail'>
                <button className='detail-btn'>
                   <span>View Detail </span> 
                    <img src={arrow} alt="Arrow"></img>
                </button>
                </div>


                     </div>


                ))
            }




           </div>
            
        </div>
        </div>
    );
};

export default Projects;