import React from 'react'
import SocialIcon from './SocialIcon'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineWhatsApp} from 'react-icons/ai'
import {AiFillCompass} from 'react-icons/ai'
const Contact=()=> {
  const handleDownload = () => {
    // Replace 'sample.txt' and 'path/to/your/file/sample.txt' with your file details
    const fileName = 'resume.pdf';
    const fileURL = './components/unzila malik resume.pdf';

    const link = document.createElement('a');
    link.href = fileURL;
    link.download = fileName;
    link.click();
  };
  return (
    <>
    <section
     id="Contact"
     className="py-10 bg-slate-300  px-5  mx-auto md:px-20 overflow-hidden"
   >
     <div   className="text-center mt-8">
       <h3 className="text-4xl font-bold text-black  ">
          Contact <span className="text-sky-500">Me</span>
       </h3>
       <p className="text-gray-600 my-3 text:lg"> Get in touch</p>
     <div className="flex md:flex-row flex-col gap-6 ">
     <div data-aos="zoom-in-down" className='bg-sky-600 md:w-6/12  font-serif text-justify  px-7 leading-6 py-10 items-center rounded-lg transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'>
<div className=''>
  <h1 className='font-bold text-black mb-3 justify-start text-2xl'>Contact Info</h1>
 <p> I have more than 4 years' experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies I use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
<div className='py-5'><SocialIcon/></div>
<div className='flex flex-wrap mt-5 w-fit item-center gap-4  '>
      <div className='min-w-[4rem] h-[4rem] flex items-center justify-center text-2xl text-white bg-black rounded-full'>
    <AiOutlineMail/>
      </div>
      <p className='text-lg pt-5'>unzilamalik99@gamil.com</p>
    </div>
    </div>
    <div className='flex flex-wrap gap-4 w-fit item-center mt-5'>
      <div className='min-w-[4rem] h-[4rem] flex items-center justify-center text-2xl text-white bg-black rounded-full'>
   <AiOutlineWhatsApp/>
      </div>
      <p className='text-lg pt-5'>+923474587834 </p>
    </div>
    <div className='flex flex-wrap gap-4 w-fit item-center mt-5 '>
      <div className='min-w-[4rem] h-[4rem] flex items-center justify-center text-2xl text-white bg-black rounded-full'>
   <AiFillCompass/>
      </div>
      <p className='text-lg pt-5'>Location_demo </p></div>
      <div>     <a 
                   href={require("./resume.pdf")} download="myFile">
                   <button onClick={handleDownload} className="mt-5 text-white bg-black  hover:text-black hover:bg-white font-bold py-4 px-5 rounded-xl">
                    Download cv
                    </button></a></div>

</div>
     <div data-aos="flip-right"  className="w-full py-10 text-slate-800 rounded-lg md:gap-6 gap-12 px-7  transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
   <div>
     <form className='flex flex-col flex-1 gap-5 '>
    <input type ="text" placeholder="your name" className='transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'/>
    <input type ="Email" placeholder="your Email Adress" className='transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'/>
    <textarea placeholder='your Message' rows={10} className='transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'></textarea>
    <button className="bg-sky-600 text-white px-5 py-4 mt-5 font-semibold rounded-full hover:bg-white hover:text-black w-fit ">Send Message</button>
  </form></div>
   <div> 

   </div>
       </div>
      
     </div>
     </div>
   </section>
</>
  )
}

export default Contact