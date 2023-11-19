import React from "react";
import SocialIcon from "./SocialIcon";
import { useNavigate } from "react-router-dom";
import Typed from 'react-typed';
export default function Banner() {
  const navigate = useNavigate();

  const someEventHandler = () => {
    navigate("/Contact");
  };
  return (
    <>
      <section className="  md:py-20  py-10 pb-20 ">
        <div className=" flex md:flex-row flex-col-reverse  md:justify-between item-center md:px-20  px-10 mx-auto max-w-[1240px] overflow-hidden  ">
          <div className=" float-left item-center ">
        <div  data-aos="fade-right">
        <div >
              <div className=" w-[50px] h-[50px] md:w-[70px] md:h-[70px] bg-black rounded-full transparent md:mb-0 mb-20 ">
                <div className=" w-[30px] h-[30px] md:w-[50px] md:h-[50px] bg-sky-500 rota rounded-full transparent "></div>
              </div>
              <div className= "z-20 text-black font-bold text-2xl md:text-3xl ">
                Welcome To My Portfolio
              </div>
              <div className="text-3xl  md:text-6xl font-semibold  pt-2">
                I'm <Typed
                className="pl-2"
                    strings={['Unzila Malik','React Developer','Coder','Programmer','Designer','developer']}
                    typeSpeed={120}
                    backSpeed={100}
                    loop="true"
                /> 
           
              </div>
              <div className=" text-2xl md:6xl font-semibold pt-4">
             Front-End Developer
              </div>

              <div className=" ">
                <p className="text-xl text-justify py-5 md:w-1/2 font-serif">
                  I design and code beautifully simple things, I like to code
                  things from scratch, and enjoy bringing ideas to life in the
                  browser, and I love what I do.
                </p>
                <SocialIcon className="mt-10" />
                <div className="py-5">
                <button  onClick={someEventHandler} className="bg-black text-white  hover:text-black hover:bg-white font-bold py-3 px-4 rounded">
                    Contact me
 </button>
                </div>
              </div>
            </div>
        </div>
          </div>
          {/* <div className="md:float right ">
       
          <div className=" ">
           <img
                src="https://media.istockphoto.com/id/1129386684/photo/portrait-of-a-pretty-smiling-woman-with-white-shirt-posing-isolated-on-a-blue-background.jpg?s=612x612&w=0&k=20&c=cId9kPzk__xlAQnynyKSfsi9TCzeXyQ9HQcbaM0AZNc="
                className="rounded-full md:w-[600px] h-[350px] mb-5 md:mt-10  "
              ></img>
           </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
