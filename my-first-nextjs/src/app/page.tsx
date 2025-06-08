'use client'

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-col md:flex-row gap-4 p-4">
      <div className="container mx-auto px-15 flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Hello!
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-2xl">
          Welcome to assignment website homepage.
        </p>
        
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 shadow-md mb-6 max-w-2xl text-left">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">🚀 How to Run the Project</h2>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-1">
            <li>Make sure Docker is installed and running.</li>
            <li>Run <code className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">docker compose up -d</code></li>
            <li>Run <code className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">npx prisma db seed</code></li>
            <li>Go to <code className="bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">http://localhost:3000</code> in your browser.</li>
          </ol>
        </div>

        <div className="flex flex-col space-y-4">
          <Link
            href="/Question_1"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Auto Delete Todo List
          </Link>

          <Link
            href="/Question_2"
            className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Create data from API
          </Link>
        </div>
      </div>
    </main>
  )
}
