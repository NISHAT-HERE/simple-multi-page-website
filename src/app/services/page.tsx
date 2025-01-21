import Navbar from "@/components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
        <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
              This is the Services page
            </h1>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Web Development */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Web Development
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Custom web applications built with modern frameworks like React and
                Next.js.
              </p>
              <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>• Frontend Development</li>
              </ul>
            </div>

            {/* UI/UX Design */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                UI/UX Design
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
                Beautiful and intuitive user interfaces that provide excellent user
                experience.
              </p>
              <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>• Responsive Design</li>
                <li>• User Research</li>
                <li>• Prototyping</li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Features
              </h3>
              <p className="mt-4 text-gray-500 dark:text-gray-400">
              Website Features.
              </p>
              <ul className="mt-4 space-y-2 text-gray-500 dark:text-gray-400">
                <li>• Technical Strategy</li>
                <li>• Beautiful Designs</li>
                <li>• Multi Page Websites</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
} 