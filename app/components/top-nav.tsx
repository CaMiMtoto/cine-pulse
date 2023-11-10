"use client"
import {FaBeer} from 'react-icons/fa';
import {useEffect, useState} from "react";

export default function TopNav() {
    const [open, setOpen] = useState(true);
    const toggle = () => setOpen(!open);
    useEffect(() => {
            if (typeof window !== 'undefined') {
                // listen for resize event and set state
                window.addEventListener('resize', () => {
                    // set state similar to how we initialize it
                    setOpen(window.innerWidth > 1024);
                });
            }
        }
    );

    return <nav
        className="relative  px-24 py-10   transition-all ease-in-out">
        {
            open &&
            <div
                className="flex gap-8 flex-col lg:flex-row self-start justify-between w-full  transition-all">
                <ul className="flex flex-col lg:flex-row gap-8 items-center">
                    <li><a className="text-lg font-normal tracking-wide leading-loose" href="">Home</a></li>
                    <li><a className="text-lg font-normal tracking-wide leading-loose" href="">TV Shows</a></li>
                    <li><a className="text-lg font-normal tracking-wide leading-loose" href="">Movies</a></li>
                    <li><a className="text-lg font-normal tracking-wide leading-loose" href="">Recently Added</a></li>
                </ul>
                <ul className="flex   flex-col lg:flex-row gap-8 items-center">
                    <li>
                        <a className="text-lg font-normal tracking-wide leading-loose" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search"
                                 width="24"
                                 height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
                                <path d="M21 21l-6 -6"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="text-lg font-normal tracking-wide leading-loose" href="">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bell-filled"
                                 width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                                 fill="none"
                                 strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M14.235 19c.865 0 1.322 1.024 .745 1.668a3.992 3.992 0 0 1 -2.98 1.332a3.992 3.992 0 0 1 -2.98 -1.332c-.552 -.616 -.158 -1.579 .634 -1.661l.11 -.006h4.471z"
                                    strokeWidth="0" fill="currentColor"></path>
                                <path
                                    d="M12 2c1.358 0 2.506 .903 2.875 2.141l.046 .171l.008 .043a8.013 8.013 0 0 1 4.024 6.069l.028 .287l.019 .289v2.931l.021 .136a3 3 0 0 0 1.143 1.847l.167 .117l.162 .099c.86 .487 .56 1.766 -.377 1.864l-.116 .006h-16c-1.028 0 -1.387 -1.364 -.493 -1.87a3 3 0 0 0 1.472 -2.063l.021 -.143l.001 -2.97a8 8 0 0 1 3.821 -6.454l.248 -.146l.01 -.043a3.003 3.003 0 0 1 2.562 -2.29l.182 -.017l.176 -.004z"
                                    strokeWidth="0" fill="currentColor"></path>
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a className="text-lg font-normal tracking-wide leading-loose" href="">
                            My List
                        </a>
                    </li>
                </ul>
            </div>
        }
        <button className="block lg:hidden absolute right-8 top-8 border p-3 transition-all ease-in-out"
                onClick={toggle}>
            {
                open &&
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="icon icon-tabler icon-tabler-x  transition-all ease-in-out" width="24"
                     height="24"
                     viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
                     strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M18 6l-12 12"></path>
                    <path d="M6 6l12 12"></path>
                </svg>
            }
            {
                !open &&
                <svg xmlns="http://www.w3.org/2000/svg"
                     className="icon icon-tabler icon-tabler-menu-2  transition-all ease-in-out" width="24"
                     height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 6l16 0"></path>
                    <path d="M4 12l16 0"></path>
                    <path d="M4 18l16 0"></path>
                </svg>
            }
        </button>
    </nav>
}