import {
    Link,
  } from "react-router-dom";

import sas from '../assets/sas.png';

import { motion } from 'framer-motion';


export default function About() {
    return (
        <div className="w-full h-full mb-10">
            <div 
            className="w-full p-4 gap-4 flex flex-col justify-center items-center overflow-hidden max-w-[800px] mx-auto">
                <div className="p-2 z-10 flex flex-col items-center sm:items-start text-2xl sm:text-3xl lg:text-4xl">
                    <motion.h1                 
                        initial={{ opacity: 0, y: "10%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, delay: 0.0 }} 
                        className="font-semibold lg:py-2 text-slate-100 text-4xl lg:text-5xl">
                        Who am I?
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: "10%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, delay: 0.1 }} 
                        className="sm:ml-4 mt-4 text-slate-300 text-base sm:text-lg md:text-xl text-center sm:text-left">
                        I'm a senior in Computer Science at <span className="text-slate-200 font-semibold">North Carolina State University</span>. 
                        I love to <span className="text-slate-200 font-semibold">build</span> things- skate ramps, quadcopters, cat trees- you name it. For me, <span className="text-slate-200 font-semibold">computer programming </span> 
                        has always been the most <span className="text-slate-200 font-semibold">accessible</span> way to build out my next project and share it with others. I'm a big supporter of free and <Link to="https://www.blender.org/about/" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-200 hover:no-underline transition-all duration-300">open source</Link> software
                        and find great joy in <span className="text-slate-200 font-semibold">collaborating</span> with other developers. If there's one thing that excites me the most, it's <span className="text-slate-200 font-semibold">learning</span> something new- I'm always  <span className="text-slate-200 font-semibold">experimenting</span> with novel technologies,
                        patterns, and designs for inspiration. Check out my <Link to={`${import.meta.env.BASE_URL}projects`} className="underline hover:text-slate-200 hover:no-underline transition-all duration-300">latest work</Link> to see this in action.
                    </motion.p>
                </div>
                <div className="p-2 z-10 flex flex-col items-center sm:items-start text-2xl sm:text-3xl lg:text-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: "10%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, delay: 0.2 }} 
                    className="font-semibold lg:py-2 text-slate-100 text-4xl lg:text-5xl">
                        My Journey
                    </motion.h1>
                    
                    <motion.ol
                        initial={{ opacity: 0, y: "10%" }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, delay: 0.3 }} 
                        className="ml-4 mt-4 relative border-s border-gray-200 dark:border-gray-700">                  
                        <li className="mb-10 ms-8">
                            <div className="absolute w-10 h-10 bg-gray-700/50 backdrop-blur-sm rounded-full mt-6 -start-5 flex justify-center items-center text-lg font-semibold text-slate-200">?</div>
                            <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">May 2025</time>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">TBD</h3>
                            <p className="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">Looking for new opportunities upon my graduation!</p>
                        </li>
                        <li className="mb-10 ms-8">
                            <img src={sas} className="absolute w-10 h-10 bg-gray-200 rounded-full mt-6 -start-5 " />
                            <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">May 2024 - August 2024</time>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Cloud Engineer Intern - <span className="font-light">SAS Institute</span></h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">Worked through all levels of cloud infrastructure- culminating in the development of a
                                service which cut EKS/EC2 costs by over $100,000 annually. The project involved machine learning models, data processing, infrastructure as code, and Kubernetes webhooks to automatically
                                detect and correct wasted resources.
                            </p>
                        </li>
                        <li className="ms-8">
                            <img src={sas} className="absolute w-10 h-10 bg-gray-200 rounded-full mt-6 -start-5 " />
                            <time className="mb-1 text-base font-normal leading-none text-gray-400 dark:text-gray-500">May 2023 - August 2023</time>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Test Automation Intern - <span className="font-light">SAS Institute</span></h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">Designed a test automation framework used by over 20
                                Test Engineers in production, leveraging Python, Playwright, and SAS Viya REST APIs. Shortened the run-time of a frontend test suite from 10 minutes to just 30 seconds with less redundancy
                                and more concurrency.
                            </p>
                        </li>
                    </motion.ol>


                </div>
            </div>
        </div>
    )
}