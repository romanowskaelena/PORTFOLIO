import React from 'react'
import ProjectSlider from '../components/ProjectSlider'


const Page = () => {
  return (
    <div className='flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#2F3A7D]'>
      <div className="absolute inset-0 bg-black opacity-45"></div> 
      <div className='mt-[160px] flex flex-row gap-3 justify-between item-center w-3/4 max-w-[1400px] fixed top-100 left-1/2 transform -translate-x-1/2'>
     
        <div className='flex flex-col gap-3 justify-center items-start w-[60%] lg:w-[40%]'>
                  <h1 className='text-[50px] text-white font-semibold '>
                  My work<span className='text-[#d20001] -900'>.</span>
                </h1>
                <p className='max-w-[400px] text-[16px] text-gray-200 md:text-gray-400'>
                Each project demonstrates mastery of these technologies and commitment to high quality standards:
        <br></br>– for creating cross-browser, semantic and valid markup HTML5/CSS3;
        <br></br>– for adaptive layout using modern CSS preprocessor techniques SCSS;
        <br></br>– for interactivity and logic of front-end applications JavaScript (ES6+);
        <br></br>– for building dynamic applications React, for managing the state - Redux;
        <br></br>– for working with databases MongoDB and MySQL;
        <br></br>– for teamwork Agile/Scrum/Kanban;
        <br></br>– for creating prototypes and user interface layouts Figma;
        <br></br>– for working with graphics and design Photoshop, Illustrator, InDesign.
                </p>
        </div>
        
        <ProjectSlider>
        </ProjectSlider>

      </div>
    </div>
  )
}

export default Page