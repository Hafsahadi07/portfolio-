// components/Hero.js
import Image from "next/image";
export default function Main() {
  return (
    <section id="home" className="bg-gray-950 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="text-center">
      <Image
          src="https://malgorzatapick.eu/pics/women-web-developer-4.svg"
          alt="Avatar"
          width={180} // Adjust as needed for your layout
          height={160} // Adjust as needed for your layout
          className="rounded-full mx-auto" />
        <h1 className="text-transparent text-5xl font-bold mt-6 bg-gradient-to-r from-white via-orange-400  to-purple-600 bg-clip-text">I do code and make content about it!</h1>
        <p className="mt-4 text-lg">If you are looking for a developer who can bring both coding expertise and creativity to your project, you are in the right place!</p>
        <div className="mt-8 space-x-4">
          <button className="bg-purple-600 hover:bg-purple-900 text-white px-6 py-3 rounded-lg"><a href="https://github.com/Hafsahadi07/Hafsahadi07">Get In Touch</a></button>
          <button className="bg-gray-700 hover:bg-gray-900 text-white px-6 py-3 rounded-lg"><a href="https://vercel.com/hafsas-projects-7c98b801/hackathon-milestones1">Download CV </a></button>
        </div>
      </div>
    </section>
  );
}
