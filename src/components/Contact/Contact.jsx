import React from 'react';

export default function Contact() {
    return (
        <div className="py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            <div className="container mx-auto px-6 text-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information Section */}
                    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                            Get in Touch
                        </h1>
                        <p className="text-lg leading-relaxed mb-6">
                            Fill in the form below or reach out directly using the contact details provided.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-400 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                <span className="text-lg font-semibold">335 G.T Road, Baidyabati, West Bengal, Pin: 712222</span>
                            </div>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-400 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 2a8 8 0 100 16 8 8 0 000-16zM4.606 15.182A7.96 7.96 0 006.687 11H4a2 2 0 012-2h7a2 2 0 012 2h-3.03a7.963 7.963 0 002.182 4.606A6 6 0 014 8.455a6 6 0 017.538-3.791c.518.893.854 1.935.954 3.036A7.974 7.974 0 0010 13a7.973 7.973 0 01-5.394-2.06c.1-1.101.436-2.143.954-3.036A6 6 0 013.462 8.98a6 6 0 01-.018-.525c0-.154.009-.306.024-.455.07-.652.233-1.257.472-1.804a8.009 8.009 0 002.156 3.662z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span className="text-lg font-semibold">+91 6290747689</span>
                            </div>
                            <div className="flex items-center">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-400 mr-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <span className="text-lg font-semibold">mejaydeepdebnath@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <form className="p-6 bg-gray-100 rounded-lg shadow-lg">
                        <label htmlFor="name" className="text-lg font-semibold">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Full Name"
                            className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500"
                        />

                        <label htmlFor="email" className="mt-4 text-lg font-semibold">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email Address"
                            className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500"
                        />

                        <label htmlFor="message" className="mt-4 text-lg font-semibold">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            className="w-full mt-2 py-3 px-4 rounded-lg bg-white border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-purple-500"
                        ></textarea>

                        <button
                            type="submit"
                            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
