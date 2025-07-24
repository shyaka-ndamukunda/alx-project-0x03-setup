import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Splash App - Home</title>
        <meta name="description" content="Welcome to Splash App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">Splash App!</span>
        </h1>
        <p className="text-xl text-gray-700 mb-8 max-w-2xl">
          This is your main content area. The Header and Footer are shared across all pages using the Layout component.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Feature One</h2>
            <p className="text-gray-600">Discover amazing features that simplify your life.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Feature Two</h2>
            <p className="text-gray-600">Connect with others and expand your network.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Feature Three</h2>
            <p className="text-gray-600">Explore new opportunities and grow your skills.</p>
          </div>
        </div>
      </div>
    </>
  );
}
