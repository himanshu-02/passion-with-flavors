// import { sortBlogs } from '@/src/utils'
// import Image from 'next/image';
// import Link from 'next/link';
// import React from 'react'
// import Tag from '../Elements/Tag';
// import { slug } from 'github-slugger';

// const HomeCoverSection = ({blogs}) => {

//     const sortedBlogs = sortBlogs(blogs);
//     const blog = sortedBlogs[0];

//   return (
//     <div className='w-full inline-block'>
//         <article className='flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]'>
//             <div className='absolute top-0 left-0 bottom-0 right-0 h-full
//             bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-3xl z-0
//             ' />
//         <Image src={blog.image.filePath.replace("../public", "")}
//         placeholder='blur'
//         blurDataURL={blog.image.blurhashDataUrl}
//         alt={blog.title}
//         fill
//         className='w-full h-full object-center object-cover rounded-3xl -z-10'
//         sizes='100vw'
//         priority
//         />

//         <div className='w-full lg:w-3/4 p-6 sm:p-8 md:p-12  lg:p-16 flex flex-col items-start justify-center z-0 text-light'>
//             <Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />
//             <Link href={blog.url} className='mt-6'>
//             <h1 className='font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl'>
//                 <span className='bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
//                 dark:to-accentDark/50 bg-[length:0px_6px]
//                 hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 '>
//                 {blog.title}
//                 </span>
//             </h1>
//             </Link>
//             <p className='hidden  sm:inline-block mt-4 md:text-lg lg:text-xl font-in'>
//                 {blog.description}
//             </p>
//         </div>
//     </article>
//     </div>
//   )
// }

import React from 'react';
import Link from 'next/link';

const HomeCoverSection = ({heading='Hi I am Saurabh,' , message='I cook as a creative outlet to have outside of my 9-to-5.' }) => {
  return (
    <div className='flex items-center justify-center min-h-screen mb-12 w-full bg-fixed bg-transparent bg-center bg-cover bg-blend-overlay bg-black/50 custom-img'>
      {/* Overlay */}
      {/* <div className='absolute top-20 left-0 right-0 bottom-0 bg-black/70 z-[2]' /> */}
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold'>{heading}</h2>
        <p className='py-5 text-xl'>{message}</p>
        <Link href="/categories/all">
          <button className='px-8 py-2 border'>Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCoverSection