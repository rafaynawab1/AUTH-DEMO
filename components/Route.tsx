export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-900">
   
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-10 text-center shadow-md border-2 border-black">
  <h1 className="text-5xl font-extrabold">Welcome to the AI Blog</h1>
  <p className="text-xl mt-4 font-light">
    Exploring the latest in Artificial Intelligence and Machine Learning
  </p>
</header>

    
      <main className="max-w-5xl mx-auto py-12 px-6">
        {/* Hero Section with Centered AI Image */}
        <section className="text-center mb-16">
      
          <h2 className="text-4xl font-bold mt-8 text-gray-800">
            The Future of Artificial Intelligence
          </h2>
          <p className="text-lg text-gray-600 mt-4 leading-relaxed">
            Artificial Intelligence (AI) is transforming industries, enhancing
            human capabilities, and unlocking new possibilities. From
            autonomous systems to personalized experiences, AI is at the
            forefront of innovation.
          </p>
        </section>

       
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-6 text-gray-800">
            Recent Articles
          </h2>
          <ul className="space-y-6">
            <li className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <a
                href="/articles/ai-in-healthcare"
                className="text-blue-600 text-lg font-medium hover:underline"
              >
                AI in Healthcare: Revolutionizing Patient Care
              </a>
              <p className="text-gray-600 mt-2">
                Discover how AI is transforming the healthcare industry, from
                diagnostics to treatment planning.
              </p>
            </li>
            <li className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <a
                href="/articles/ai-and-ethics"
                className="text-blue-600 text-lg font-medium hover:underline"
              >
                Ethics in AI: Balancing Innovation and Responsibility
              </a>
              <p className="text-gray-600 mt-2">
                Explore the ethical challenges and considerations in the rapidly
                evolving field of AI.
              </p>
            </li>
            <li className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <a
                href="/articles/machine-learning-basics"
                className="text-blue-600 text-lg font-medium hover:underline"
              >
                Machine Learning 101: A Beginners Guide
              </a>
              <p className="text-gray-600 mt-2">
                A comprehensive guide to understanding the basics of machine
                learning and its applications.
              </p>
            </li>
          </ul>
        </section>
      </main>

   
      <footer className="bg-gray-800 text-gray-200 py-6 text-center shadow-md">
        <p>© 2024 AI Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}
