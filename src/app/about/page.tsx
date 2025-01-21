import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              About Us
            </h1>
            <div className="mt-6 text-gray-500 dark:text-gray-400 space-y-6">
              <p>
              Hi 👋🏻 Name is Nishat and I am a Frontend Developer.
              </p>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Our Values
              </h2>
              <ul className="mt-4 space-y-4 text-gray-500 dark:text-gray-400 list-disc list-inside">
                <li>Mobile Responsive</li>
                <li>Tablet Responsive</li>
                <li>Laptop Responsive</li>
                <li>Large Screen Computer Responsive</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 