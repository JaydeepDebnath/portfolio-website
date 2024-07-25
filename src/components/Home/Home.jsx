import React from 'react';

const Home = () => {
    return (
        <div className="mx-auto w-full max-w-7xl">
          {/* Hero section */}
          <section className="relative overflow-hidden text-white bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg sm:mx-16 mx-2 sm:py-16">
  <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
      {/* Content goes here */}
    </div>
  </div>
  
  {/* Absolute positioned image */}
  <div className="absolute inset-0 overflow-hidden">
    <img
      className="absolute inset-0 w-full h-full object-cover"
      src="https://i.ibb.co/D7TMZxq/pexels-kevin-ku-92347-577585.jpg"
      alt="Illustration"
    />
  </div>
</section>
      
          {/* Secondary section */}
          <div className="grid place-items-center sm:mt-20">
            <img
              className="sm:w-96 w-48 rounded-lg shadow-lg"
              src="https://i.ibb.co/2M7rtLk/Remote1.png"
              alt="Another Illustration"
            />
          </div>
      
          {/* Main content */}
          <h1 className="text-center text-3xl sm:text-5xl py-10 font-bold text-gray-800">Welcome to My Personal Blog!</h1>
          <div className="mx-auto max-w-3xl text-center text-lg text-gray-700">
            <p className="text-left text-4xl">
              Hello,
            </p>
            <br/>
            <p className='text-pretty text-justify text-gray-500'>
              I am a dedicated Full Stack Developer specializing in 
              Node.js, Express, React, and Next.js, with a strong 
              passion for creating seamless digital experiences. 
              Through hands-on experience across a variety of 
              projects, I have honed my skills in building robust 
              backend systems with Node.js and Express, as well as
               crafting dynamic and responsive user interfaces using React and Next.js.
            </p>
            <br/>
            <p className='text-pretty text-justify text-gray-500'>
              My approach to development is rooted in problem-solving and continuous learning, allowing me to stay abreast of industry trends and best practices. I am eager to bring my technical expertise and collaborative spirit to your team, contributing to innovative solutions and driving project success.
            </p>
            <br />
            <div className='mx-auto max-w-3xl space-x-8 space-y-8'>
            <h2 className='text-pretty text-justify text-red-900'>
            Here are some of my deployed projects for your review: <br />
            </h2>
            </div>
            <ol className='list-decimal text-left'>
            <a href="https://next-auth-sigma-jade.vercel.app" className="text-blue-500 hover:underline">authentication</a>,{' '}<br/>
            <a href="https://example.com" className="text-blue-500 hover:underline">Project 2</a>,{' '}<br/>
            <a href="https://example.com" className="text-blue-500 hover:underline">Project 3</a><br/>
            </ol>
            <br />
            <br />
            <p className='text-pretty text-justify'>I look forward to discussing how my skills and experiences align with your team's needs.</p>
            <p className='text-pretty text-justify'>Best regards,</p>
            <div className='flex justify-center'>
            <p className='text-pretty flex text-2xl text-justify rounded-lg text-yellow-700'>Jaydeep Debnath</p>
            </div>
          </div>
        </div>
      );
};

export default Home;
