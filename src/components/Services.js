import React from "react";
import {GiPlatform} from 'react-icons/gi';
import {GrVmMaintenance} from 'react-icons/gr';
import {VscServerProcess} from 'react-icons/vsc';
import {GrEscalator} from 'react-icons/gr';


const Services = () => {
  return (
    <>
      <section
        id="Services"
        className="py-20 bg-black text-white  px-5  mx-auto md:px-20 overflow-hidden md:h-screen items-center"
      >
        <div data-aos="flip-right" className="text-center mt-8">
          <h3 className="text-4xl font-semibold">
            My Ser<span className="text-sky-500">vices</span>
          </h3>
          <p className=" text-gray-400 my-3 text:lg">
            {" "}
            Information about Services
          </p>
          <div className="mt-10 flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-7 max-w-6xl mx-auto ">
            {/* -----------card1-------- */}
            <div className="flip w-60 h-60 rounded-lg transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              <div className="flip-content bg-sky-500 rounded-xl">
                <div className="flip-front">
               <div className="px-20 py-20 text-[90px]"><GiPlatform/>
               <h1 className="text-xl">Techologies</h1>
               </div>
                </div>
                <div className="flip-back">
             <div className="text-xl px-20 py-10 ">
             <strong>PLATFORM</strong>
                <h1>jAVASCRIP</h1>
                <h1>ReactJS</h1>
                <h1>TAILWIND</h1>
                <h1>PYTHON</h1>
                <h1>JAVA</h1>
             </div>
                </div>
              </div>
            </div>

            {/* ------------card2-------- */}
            <div className="flip w-60 h-60 rounded-lg transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              <div className="flip-content bg-sky-500 rounded-xl">
                <div className="flip-front ">
               <div className="px-20 py-20 text-[80px] mb-5 text-white"><GrVmMaintenance/>
               <h1 className="text-xl">Maintenance and support</h1>
               </div>
                </div>
                <div className="flip-back">
             <div className="px-2 py-5 ">
             <strong>Maintenance and support</strong>
             <p>Maintenance is what's required to keep software updated to the latest version and get patch updates. Support is what's generally required for asking questions and getting SLAs on bug reports and fixes to issues.</p>
             </div>
                </div>
              </div>
            </div>
            {/* -------card3-------- */}
            <div className="flip w-60 h-60 rounded-lg transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              <div className="flip-content bg-sky-500 rounded-xl">
                <div className="flip-front">
               <div className="px-20 py-20 text-[90px]"><VscServerProcess/>
               <h1 className="text-xl">process managment</h1>
               </div>
                </div>
                <div className="flip-back">
             <div className="px-3 py-10 ">
             <strong>process managment</strong>
              <p> Information Gathering, Planning, Design, Content Writing and Assembly, Coding, Testing, Review and Launch, as well as Maintenance</p>
             </div>
                </div>
              </div>
            </div>
            {/* -------------card4----- */}
            <div className="flip w-60 h-60 rounded-lg transition duration-150 ease-in-out bg-primary-600 shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
              <div className="flip-content bg-sky-500 rounded-xl">
                <div className="flip-front">
               <div className="px-20 py-20 text-[90px]"><GrEscalator/>
               <h1 className="text-xl">Scalability</h1>
               </div>
                </div>
                <div className="flip-back">
             <div className="px-3 py-5 ">
             <strong>Scalability</strong>
             <p>Scalability is the ability of an application to handle a growing number of customers, clients, or users. It is directly related to the ability of your current or future developer to maintain the app and its data consistency.</p>
             </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
