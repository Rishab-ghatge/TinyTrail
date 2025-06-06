"use client";

import React from 'react';

const Page = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-900">
      <h1 className="text-5xl font-extrabold mb-6 text-center text-gradient bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        About TinyTrail 
      </h1>

      <p className="text-lg leading-relaxed mb-8 text-center max-w-2xl mx-auto">
        TinyTrail is a sleek, privacy-first tool that transforms your long links into short, memorable URLs — instantly. No accounts. No tracking. Just fast and elegant link shortening.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-3">✨ Simplicity Meets Function</h2>
          <p className="text-base leading-relaxed">
            Built with the modern user in mind, our tool lets you shorten links effortlessly with optional custom names. Whether you're sharing a link in a tweet, message, or email — we keep it clean.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-3">🔐 Privacy Comes First</h2>
          <p className="text-base leading-relaxed">
            We believe tools should work for you — not harvest your data. That’s why TinyURL Maker works 100% without logins, cookies, or analytics bloat. What you shorten is your business.
          </p>
        </div>
      </div>

      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-inner">
        <h2 className="text-xl font-bold mb-2 text-gray-700 dark:text-gray-100">🚀 Key Features</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Custom short URL aliases (e.g., <code>yourdomain.com/awesome</code>)</li>
          <li>Instant link generation, no reloads</li>
          <li>Minimal UI, maximum speed</li>
          <li>Mobile-friendly and blazing fast</li>
        </ul>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500">
        Built with ❤️ using Next.js, Tailwind CSS, and love for simplicity.
      </footer>
    </div>
  );
};

export default Page;

