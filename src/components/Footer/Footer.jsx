import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from  "react-icons/fa";
import { Link } from 'react-router-dom';

const FooterLinks = [
  {
    title:"Home",
    link:"/",
  },
  {
    title:"Projects",
    link:"/projects",
  },
  {
    title:"Products",
    link:"/products",
  },
];

const Footer = () => {
  return (
    <div className='bg-cyan-600 text-white rounded-t-3xl mt-8 md:mt-0 '>
      <div className='flex  flex-col md:flex-row justify-between p-8 md:px-32 px-5 border-b-2 mx-auto'>
        <div className="">
          <div className='py-8'>
            <h1 className='font-bold  text-2xl'>VELA INDUSTRY</h1>
            <p>Structural Engineering and consultancy</p>
          </div>
        </div>
        {/* links */}
        <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 '>
          <div>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-bold text-justify sm:text-left mb-3'>Importand Links</h1>
              <ul className='flex flex-col gap-3'>
                {FooterLinks.map(({title, link})=> (
                  <li className='curser-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white'>
                    <Link 
                      to={link}
                      onClick={()=>{
                        window.scrollTo(0,0);
                      }}
                    >
                      <span>&#11162;</span>
                      <span>{title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* contact us */}
        <div>
          <div  className='py-8'>
            <h1 className='font-bold text-xl'>Contact us</h1>
          </div>
            <div className='flex items-center gap-3 '>
                <FaMobileAlt />
                <p>+123 456 789</p>
            </div>
            <div className='items-center '>
                <div className='flex items-center gap-3 mt-6'>
                  <a href="#">
                    <FaInstagram className='text-3xl'/>
                  </a>
                  <a href="#">
                    <FaFacebook className='text-3xl'/>
                  </a>
                  <a href="#">
                    <FaLinkedin className='text-3xl'/>
                  </a>
                </div>
            </div>
        </div>   
      </div>
      {/* footer */}
      <div className='container flex justify-between py-1'>
        <div>
          <h1 className='font-bol'>@{new Date().getFullYear()} Vela Industry.... || All Rights Reserved</h1>
        </div>
        <div className='flex gap-7'>
          <a href=""><p>Terms & Conditions</p></a>
          <a href=""><p>Privacy</p></a>
          <a href=""><p>Security</p></a>
        </div>
      </div>
    </div>
  )
};

export default Footer