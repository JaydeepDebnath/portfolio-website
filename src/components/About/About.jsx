import React from 'react';

function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12">
                        <img
                            className="w-full object-cover rounded-lg"
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="Developer"
                        />
                    </div>
                    <div className="md:w-7/12">
                        <h2 className="text-4xl font-bold mb-4">
                            About Me
                        </h2>
                        <p className="text-lg leading-relaxed mb-6">
                            Greetings! I am deeply passionate about crafting transformative experiences through React development. My journey is a tapestry woven with relentless dedication to creating sleek, responsive web applications. Imbued with creativity and fueled by innovation, I navigate the digital landscape with a fervent commitment to excellence.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Beyond coding, I indulge in the exhilarating pursuit of technological frontiers, constantly pushing boundaries and embracing challenges head-on. My mission extends beyond mere proficiency; it is a relentless pursuit of mastery and a commitment to shaping the future of digital interactions. Join me on this exhilarating journey, where every line of code signifies a step towards innovation and empowerment.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
