import React from 'react';
import Slide4 from "../assets/slide4.jpg";
import { GoGoal } from "react-icons/go";
import { GoRocket } from "react-icons/go";
import { GoTrophy } from "react-icons/go";
import { RiLightbulbFlashLine } from "react-icons/ri";
import Img1 from "../assets/pre.jpg";
import Img2 from "../assets/mezzaine.jpg";
import Img3 from "../assets/coldformed.jpg";
import Img4 from "../assets/electric.jpg";



const Home = () => {
  return (
    <div className='w-[screen]'>
      <div>
        <div className='w-[screen] relative h-[670px]'>
          <img src={Slide4} alt=""  className='h-[655px] w-full object-cover absolute' />
        </div>
        {/* content */}
        <div>
          <div className='container py-8 mt-8 mb-8'>
            <h1 className='text-semibold text-4xl py-8'>Vela Industry, founded in 1996, offers structural engineering and 
                consultancy services, specializing in the design and analysis of safe 
                and stable structures. They provide expert guidance on materials, 
                load calculations, building code compliance, and project 
                management
              </h1>
              <p className='text-2xl italic py-5'>A rapidly growing professional firm, we specialize in the design, manufacture, and installation 
              of various structures and have successfully completed numerous projects.</p>
          </div>
        </div>

        {/* goals */}
          <div className='bg-gray-200 p-10'>
            <div className='container mx-auto bg-gray-200 p-8'>
              <div className='grid lg:grid-cols-2 gap-8'>
                <div className='flex gap-4'>
                  <div className=''>
                    <GoGoal size={100} className=''/>
                  </div>
                  <div className=''>
                    <h1 className='uppercase font-semibold text-2xl'>OUR VISION</h1>
                    <p className='text-xl py-3'>Innovative solutions for a sustainable future.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className=''>
                    <GoRocket size={100} className=''/>
                  </div>
                  <div className=''>
                    <h1 className='uppercase font-semibold text-2xl'>OUR MISSION</h1>
                    <p className='text-xl py-3'>Exceeding client expectations with excellence.</p>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <div className=''>
                    <GoTrophy size={100} className=''/>
                  </div>
                  <div className=''>
                    <h1 className='uppercase font-semibold text-2xl'>OUR GOAL</h1>
                    <p className='text-xl py-3'>To meet all project timelines efficiently.</p>
                  </div>
                </div>
                <div className='flex'>
                  <div className=''>
                    <RiLightbulbFlashLine size={100} className=''/>
                  </div>
                  <div className=''>
                    <h1 className='uppercase font-semibold text-2xl'>OUR PHILOSOPHY</h1>
                    <p className='text-xl py-3'>Innovative thinking drives practical excellence.</p>
                  </div>
                </div>          
              </div>
            </div>
        </div>
        {/* Banner*/}
        <div className='w-[screen]'>
          <div className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
            <div className='container flex flex-col justify-center text-center md:text-left space-y-8 lg:max-w-[800px]'>
              <h2 className='text-3xl justify-center'>PRE ENGINEERED BUILDINGS</h2>
              <p className='text-xl'>Our pre-engineering work ensures precision, 
                  efficiency, and robust solutions through thorough 
                  planning and innovative design.
              </p>
              <div>
                <button className='text-blue-400 text-xl'>Read More</button>
              </div>
              
            </div>
            <div>
              <img src={Img1} alt="" className='w-md  object-cover'/>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
            <div className=''>
                <img src={Img2} alt="" className='w-md object-cover'/>
            </div>
            <div className='container flex flex-col justify-center text-center md:text-left space-y-8 lg:max-w-[800px]'>
              <h2 className='text-3xl justify-center uppercase'>mezzaine floor</h2>
              <p className='text-xl'>Our pre-engineering work ensures precision, 
                  efficiency, and robust solutions through thorough 
                  planning and innovative design.
              </p>
              <div>
                  <button className='text-blue-400 text-xl'>Read More</button>
              </div>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
            <div className='container flex flex-col justify-center text-center md:text-left space-y-8 lg:max-w-[800px]'>
              <h2 className='text-3xl justify-center uppercase'>Cold-formed steel 
              buildings</h2>
              <p className='text-xl'>Cold-formed steel buildings utilize lightweight, 
                  precisely shaped steel sections to provide a 
                  cost-effective, durable, and flexible construction 
                  solution.
              </p>
              <div>
                  <button className='text-blue-400 text-xl'>Read More</button>
              </div>
            </div>
            <div>
              <img src={Img3} alt="" className='w-md  object-cover'/>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 pb-7'>
            <div className=''>
                <img src={Img4} alt="" className='w-md  object-cover'/>
            </div>
            <div className='container flex flex-col justify-center text-center md:text-left space-y-8 lg:max-w-[800px]'>
              <h2 className='text-3xl justify-center uppercase'>Electric Overhead 
              Traveling</h2>
              <p className='text-xl'>An EOT (Electric Overhead Traveling) support 
                  beam is a crucial structural component that 
                  supports the overhead crane system, ensuring 
                  stability and proper load distribution for safe and 
                  efficient crane operation.
              </p>
              <div>
                  <button className='text-blue-400 text-xl'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
