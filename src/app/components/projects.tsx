// components/Projects.js

import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="bg-gray-950 text-white py-20">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10 text-orange-700">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Repeat this block for each project */}
          <a href="https://vercel.com/hafsas-projects-7c98b801/hackathon-milestones1">
          <div className="bg-gray-700 p-6 rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
        src="/images/project1.png"
        alt="Project 1"
        width={500} // Adjust width as needed
        height={300} // Adjust height as needed
        className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold">Project Title 1</h3>
            <p className="mt-2">A brief description of the project.</p>
          </div>
          </a>

          <a href="https://vercel.com/hafsas-projects-7c98b801/htmlwebsite">
          <div className="bg-gray-700 p-6 rounded-lg">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <Image
        src="/images/project2.png"
        alt="Project 2"
        width={500} // Adjust the width based on your design
        height={300} // Adjust the height based on your design
        className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold">Project Title 2</h3>
            <p className="mt-2">A brief description of the project.</p>
          </div>
          </a>
        </div>
      </div>
    </section>
  );
}
