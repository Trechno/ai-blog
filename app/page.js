import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="container px-4 py-10 mx-auto lg:h-128 lg:space-x-8 lg:flex lg:items-center">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A <span className="font-semibold">Blogging Platform</span> for
            coders <br className="hidden lg:block" /> Connect, Share, and Grow
            Together.{" "}
            <span className="font-semibold underline decoration-purple-600 ">
              <br />
              Start Writing Today!
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            Share your insights, discoveries, <br className="hidden lg:block" />{" "}
            and experiences with fellow developers.
          </p>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
            src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
            alt="tailwind css components"
            width={500}
            height={500}
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="bg-gray-50 dark:bg-gray-950 py-16 px-8">
        <div className="max-w-7xl mx-auto flex justify-center gap-8 flex-wrap">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md flex-1 min-w-[280px] max-w-[350px] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-center text-gray-800 dark:text-white text-xl font-semibold mb-6">
              Free
            </h3>
            <div className="text-center mb-8">
              <span className="text-2xl align-super dark:text-white">$</span>
              <span className="text-5xl font-bold dark:text-white">0</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="list-none p-0 mb-8">
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                1 User Account
              </li>
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                10 GB Storage
              </li>
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                No AI Tools
              </li>
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                Email Access
              </li>
            </ul>
            <Button className="mx-1 w-full" variant="outline">
              Get Started
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md flex-1 min-w-[280px] max-w-[350px] border-2 border-purple-600 scale-105 hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-center text-gray-800 dark:text-white text-xl font-semibold mb-6">
              Blogger
            </h3>
            <div className="text-center mb-8">
              <span className="text-2xl align-super dark:text-white">$</span>
              <span className="text-5xl font-bold dark:text-white">5</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="list-none p-0 mb-8">
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                5 User Accounts
              </li>
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                50 GB Storage
              </li>
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                AI Tools (limited)
              </li>
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                Email + Phone Access
              </li>
            </ul>
            <Button className="mx-1 w-full" variant="outline">
              Get Started
            </Button>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md flex-1 min-w-[280px] max-w-[350px] hover:-translate-y-2 transition-transform duration-300">
            <h3 className="text-center text-gray-800 dark:text-white text-xl font-semibold mb-6">
              Avid Blogger
            </h3>
            <div className="text-center mb-8">
              <span className="text-2xl align-super dark:text-white">$</span>
              <span className="text-5xl font-bold dark:text-white">15</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="list-none p-0 mb-8">
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                50 User Accounts
              </li>
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                250 GB Storage
              </li>
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                AI Tools
              </li>
              <li className="py-2 text-center text-gray-600 dark:text-gray-400">
                Full Access
              </li>
            </ul>
            <Button className="mx-1 w-full" variant="outline">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-gray-600 dark:bg-gray-900 py-16 px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Featured Blog Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <article className="bg-white/10 backdrop-blur-lg dark:bg-gray-800/30 rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300">
              <img
                src="/Tailwind.webp"
                alt="Blog 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-purple-300 text-sm">12 Dec 2023</span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  Getting Started with Tailwind CSS
                </h3>
                <p className="text-gray-300 mt-3 line-clamp-3">
                  Learn how to set up and use Tailwind CSS in your next web
                  project with these simple steps...
                </p>
                <Button className="m-2" variant="outline">
                  Read More
                </Button>
              </div>
            </article>

            <article className="bg-white/10 backdrop-blur-lg dark:bg-gray-800/30 rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300">
              <img
                src="/WebAnimation.webp"
                alt="Blog 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-purple-300 text-sm">15 Dec 2023</span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  Modern Web Animation Techniques
                </h3>
                <p className="text-gray-300 mt-3 line-clamp-3">
                  Explore the latest animation techniques for creating engaging
                  web experiences...
                </p>
                <Button className="m-2" variant="outline">
                  Read More
                </Button>
              </div>
            </article>

            <article className="bg-white/10 backdrop-blur-lg dark:bg-gray-800/30 rounded-lg overflow-hidden shadow-md hover:-translate-y-2 transition-transform duration-300">
              <img
                src="/BestPractices.webp"
                alt="Blog 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <span className="text-purple-300 text-sm">18 Dec 2023</span>
                <h3 className="text-xl font-semibold text-white mt-2">
                  Responsive Design Best Practices
                </h3>
                <p className="text-gray-300 mt-3 line-clamp-3">
                  Master the art of creating responsive websites that work
                  seamlessly across all devices...
                </p>
                <Button className="m-2" variant="outline">
                  Read More
                </Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
