import React from "react";
import {Swiper,SwiperSlide} from "swiper/react" ;
import "swiper/css"
import "swiper/css/pagination"
import { Pagination,Autoplay } from "swiper/modules";
// import { Navigation } from 'swiper/modules';
const Project = () => {
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
        id="Project"
        className=" bg-black  px-5 md:px-40 overflow-hidden"
      >
        <div className="text-center mt-8">
          <h3 className="text-2xl md:text-5xl py-5 font-bold">
            My<span className="text-sky-600">Proje</span>cts
          </h3>
</div>
 
<div className="mx-auto md:px-60 px-10 mb-10  ">
<div  data-aos="flip-right" className=" py-5 ">
<Swiper slidesperview={1.2} spaceBetween={20} 
breakpoints={{
  768:{
    slidesperview: 2,
  },
}}
loop={true}
autoplay={{delay:2000,}}
pagination={{
  clickable:true,
}}
modules={[Pagination,Autoplay]}
>
{/* --------slide 1---------- */}
<SwiperSlide>
<div className="h-fit w-[600]  p-4 bg-slate-700 rounded-xl ">
  <h1 className="text-white text-2xl py-5"> TextUtil Web-App</h1>
<img src="project1.png" alt="TextUtil-Web app"
 className="rounded-lg w-[600]"/>

<div className="flex gap-3 py-3">
    <a href="https://github.com/unzilamalik99/textUtils" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">Github</a>
    <a href="https://textutilsnetlify.netlify.app/" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">Live</a>
  </div>
  </div>
 </SwiperSlide>

 {/* ------------slide2------------- */}

 <SwiperSlide>
<div className="h-fit w-[600]  p-4 bg-slate-700 rounded-xl ">
<h1 className="text-white text-2xl py-5"> MaryamAcadmy Web-App</h1>
<img src="project2.png" alt="Maryam Acadmy-Web app"
 className="rounded-lg w-[600px]"/>

<div className="flex gap-3 py-3">
   
   <a href="https://github.com/unzilamalik99/website" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">Github</a>
   <a href="https://acadmyaducation.netlify.app/" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">Live</a>
  
  </div>
  </div>
 </SwiperSlide>
 {/* ------------slide3----------- */}

 <SwiperSlide>
<div className="h-fit w-[600]  p-4 bg-slate-700 rounded-xl ">
<h1 className="text-white text-2xl py-5"> landing page Web-App</h1>
<img src="project3.png" alt="LandingPage-Web app"
 className="rounded-lg w-w-[600]"/>

<div className="flex gap-3 py-3">
    <a href="https://github.com/unzilamalik99/CODSOFT-Web-Development-Internship" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">Github</a>
   <a href="luxury-landingpage.netlify.app" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">Live</a>

  </div>
  </div>
 </SwiperSlide>
 {/* ---------slide4--------------- */}

 <SwiperSlide>
 <div className="h-fit w-[600]  p-4 bg-slate-900 rounded-xl ">
 <h1 className="text-white text-2xl py-5"> Ecommerce Web-App</h1>
<img src="project4.png" alt="Ecommerce-Web app"
 className="rounded-lg w-w-[600]"/>

<div className="flex gap-3 py-3">
    <a href="https://github.com/unzilamalik99/Ecommerce-App" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">Github</a>
    <a href="https://shopap.netlify.app/" className="text-sky-600 bg-gray-800 px-2 py-1 inline-block">Live</a>
  
  </div>
  </div>
 </SwiperSlide>

  </Swiper> 
    </div>
  </div>
 
      </section>
      <div  className="py-10 bg-slate-300"> <div className=" flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-7 max-w-6xl mx-auto transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
          <div data-aos="flip-left"  className="">
          
            <div className="p-6">
              <p className="mb-4  text-base  text-black dark:text-neutral-200">
                <div className="">
                  <div className="text-black my-3 font-serif ">
                    <p className="text-justify leading-8 mx-auto">
                      <p className="pt-3 text-justify pb-10">
                        <div className=" w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-sky-800 rounded-full transparent ">
                          <div className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-sky-600 rounded-full transparent "></div>
                        </div>
                        Design and establish user-friendly websites including optimized check-out.Establish an interactive and dynamic website that guartees high taffic,page view, and maximun user Experience.formulated and implement improvements on clean up process and performance ,minimizing downtime by 10%.
                        web technologies, possesses excellent problem-solving skills, and has a strong understanding of web development best practices. In this role, you will be responsible for designing, coding, and modifying websites, from layout to function, according to project specifications. You will collaborate closely with our cross-functional teams to deliver high-quality web solutions.
                      </p>
                    </p>
                    <br />
                   
                  </div>

                </div>
              </p>
              <div className="font-bold  my-5">
                   <a 
                   href={require("./resume.pdf")} download="myFile">
                   <button onClick={handleDownload} className="bg-sky-600 text-white  hover:text-white hover:bg-black font-bold py-4 px-5 rounded-xl">
                    Download cv
                    </button></a>
                  </div>
            </div>
          </div>{" "}
          <div className=" w-[250px] h-[300px] md:w-[300px] md:h-[400px] bg-sky-600 rounded-xl  ">
            <div className=" w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-sky-800 rounded-full transparent ">
              <div className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-black rounded-full transparent "></div>
            </div>

            <div className="flex-1 flex overflow-hidden  rotate-[10deg]  ">
              <div className=" lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm">
                <img
                  src="https://media.istockphoto.com/id/1396924272/photo/woman-in-blue-hooded-shirt-standing-with-hand-on-chin.jpg?s=612x612&w=0&k=20&c=xQF3eIdOAafaqGYseriKuBnYalYziL-kRy02g0ipSII="
                  alt=""
                  className="w-full object-cover  rounded-xl "
                />
              </div>
            </div>
          </div>
        </div></div>
    </>
  );
};

export default Project;
