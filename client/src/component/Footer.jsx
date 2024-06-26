import React from 'react';React;
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterestCircular } from "react-icons/ti";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

import footer from '../assets/footer.jpg';

export default function Footer() {
    const socialStyle = "m-3 rounded-full cursor-pointer p-2 text-white ";

    return (
        <div className='flex items-center justify-around p-2 pt-1 mobile:flex-col mobile:items-start' style={{ backgroundImage: `url(${footer})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>


            <div className='flex-1 flex flex-col flex-wrap p-2 text-white'>
                <h1 className='text-[25px] pt-2 pb-2 '>Fresh Leaf</h1>
                <p>
                    Taste it And Feel it
                </p>
                <div className='flex items-center justify-center mt-3 self-start pb-3'>
                    <div className={socialStyle + 'bg-blue-700'}>
                        <TiSocialFacebook />
                    </div>
                    <div className={socialStyle + 'bg-[#FD610B]'}>
                        <TiSocialInstagram />
                    </div>
                    <div className={socialStyle + 'bg-sky-400'}>
                        <TiSocialTwitter />
                    </div>
                    <div className={socialStyle + 'bg-red-600'}>
                        <TiSocialPinterestCircular />
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col p-2 text-white pl-80'>
                <div className='flex m-3 '>
                    <MdOutlineLocationOn />
                    <p className='pl-3'>District of Batticaloa</p>
                </div>
                <div className='flex m-3 '>
                    <MdOutlineLocalPhone />
                    <p className='pl-3'>+94 123456789</p>
                </div>
                <div className='flex m-3 '>
                    <MdOutlineMailOutline />
                    <p className='pl-3'>Iraivan@gmail.com</p>
                </div>
            </div>
        </div>
    );
}
