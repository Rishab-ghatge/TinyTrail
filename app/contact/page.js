"use client";

import React from 'react';

const Page = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-gray-900 font-sans">
      <h1 className="text-5xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Contact TinyTrail
      </h1>

      <p className="text-lg mb-10 text-center text-gray-700">
        Have a question, suggestion, or need help? We'd love to hear from you. Fill out the form below and we'll get back to you shortly.
      </p>

      <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-800">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-800">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            placeholder="you@example.com"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-800">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 p-2"
            placeholder="How can we help you?"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition"
        >
          Send Message
        </button>
      </form>

      <footer className="mt-12 text-center text-sm text-gray-500">
        We'll get back to you as soon as we can. Thank you for reaching out.
      </footer>
    </div>
  );
};

export default Page;

