import Link from "next/link";
import fs from 'fs'
import matter from 'gray-matter'

const dirContent = fs.readdirSync("content", "utf-8")

const blogs = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
  const {data} = matter(fileContent)
  return data
})
const Blog = () => {
/*   const blogs = [
    {
      title: "Getting Started with Next.js",
      description: "Learn the basics of Next.js and build your first application with this powerful React framework.",
      slug: "getting-started-nextjs",
      date: "2024-01-15",
      author: "John Doe",
      image: "/blog/nextjs-intro.jpg"
    },
    {
      title: "Mastering Tailwind CSS",
      description: "Deep dive into Tailwind CSS utility classes and learn how to build beautiful responsive designs.",
      slug: "mastering-tailwind",
      date: "2024-01-10", 
      author: "Jane Smith",
      image: "/blog/tailwind.jpg"
    },
    // Add more blog posts as needed
  ]; */

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-48">
              <img 
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm ">{blog.date}</span>
                <span className="text-sm ">{blog.author}</span>
              </div>
              
              <h2 className="text-xl font-semibold mb-3 hover:text-purple-800">
                <Link href={`/blogpost/${blog.slug}`}>
                  {blog.title}
                </Link>
              </h2>
              
              <p className="text-black dark:text-gray-100 mb-4 line-clamp-3">
                {blog.description}
              </p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;