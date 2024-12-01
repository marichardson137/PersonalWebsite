import {
    Link,
  } from "react-router-dom";

// Import Swiper React components
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ImagePreview } from './Interactive';
import { motion} from "framer-motion"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


export const ProjectCard = ({ title, description, technologies, link, images, index }) => {

const isOdd = (index) => index % 2 !== 0;

  return (
    <motion.div
    initial={{ opacity: 0, y: "20%" }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 * index + 0.05 }}
    className={`border-primary-base border-b-4 pb-8 md:pb-4 md:border-none w-full md:w-[90%] min-h-[250px] flex flex-col ${isOdd(index) ? "md:flex-row-reverse" : "md:flex-row"} gap-2 md:gap-4 p-4 text-lg text-slate-100`}>
        <div className="rounded-xl md:w-[55%] p-2 border-2 border-primary-base">
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={'auto'}
                navigation
                >
                { images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <ImagePreview src={image}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        <div className="md:w-[45%] rounded-xl bg-primary-base p-4 flex flex-col justify-between gap-4 overflow-hidden">
            <div className="flex flex-col gap-1">
                <Link target="_blank" rel="noopener noreferrer" to={link} className="text-2xl font-semibold">
                    {title}
                </Link>
                <p className="text-base text-slate-400">{description}</p>
            </div>
            <div className="flex gap-2 text-sm overflow-x-scroll rounded-full pr-2">
                { technologies.map((technology, index) => (
                    <span key={index} className="bg-primary-light/75  rounded-full py-1 px-2">
                        { technology }
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
  );
};