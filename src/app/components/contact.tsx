export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact</h2>
        
        <div className="flex flex-col items-center">
          {/* Contact Information */}
          <p className="text-center text-gray-400">
            Feel free to reach out to me via email or on social media.
          </p>
          
          <p className="text-xl mt-4">
            <a href="mailto:your.email@example.com" className="hover:text-purple-500">
              your email@example.com
            </a>
          </p>


          {/* Contact Form */}
          <div className="mt-10 w-full max-w-md">
            <form className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  id="name"
                  type="text"
                  placeholder="Your name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  id="email"
                  type="email"
                  placeholder="Your email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-400 text-sm mb-2" htmlFor="message">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  id="message"
                  rows={4}
                  placeholder="Your message"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
