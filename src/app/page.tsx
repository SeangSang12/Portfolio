export default function Home() {
  return (
    <div className="container max-w-3xl mx-auto mt-10 space-y-10 sm:px-4">
      {/* header */}
      <div className="flex flex-col items-center justify-center sm:px-4 space-y-4">
        <h1 className="text-4xl font-bold">Seang Sang (Jack)</h1>
        <p className="text-gray-400 text-left">Web Developer</p>
      </div>
      {/* About Me */}
      <div className="flex flex-col items-center justify-center sm:items-start sm:text-left space-y-4">
        <h2 className="text-2xl font-bold">About Me</h2>
        <p className="text-gray-400 text-center sm:text-left">
          Hello, I'm Seang Sang, a Cambodian Web Developer passionate about
          building modern, responsive, and user-friendly web applications. I
          focus on clean UI/UX, performance, and scalable frontend
          architectures.
        </p>
      </div>
      {/* Tech Stack */}
      <div className="flex flex-col items-center justify-center sm:items-start sm:text-left space-y-4">
        <h2 className="text-2xl font-bold">Tech Stack</h2>
        <div className="flex flex-wrap flex-col items-center justify-center sm:items-start sm:text-left gap-4 mt-4">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-lg font-bold">Frontend:</h3>
            <p className="text-gray-400 text-center sm:text-left ml-2">
              HTML, CSS, JavaScript,Tailwind CSS, React.js, TypeScript, Next.js
            </p>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-lg font-bold">Backend:</h3>
            <p className="text-gray-400 text-center sm:text-left ml-2">
              Node.js, Express.js, Nest.js, Prisma
            </p>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-lg font-bold">Database:</h3>
            <p className="text-gray-400 text-center sm:text-left ml-2">
              PostgreSQL, MySQL, MongoDB
            </p>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-lg font-bold">Tools:</h3>
            <p className="text-gray-400 text-center sm:text-left ml-2">
               GitHub, Docker, Vercel
            </p>
          </div>
        </div>
      </div>
      {/* Projects */}
      <div className="flex flex-col items-center justify-center sm:items-start sm:text-left space-y-4">
        <h2 className="text-2xl font-bold">Projects</h2>
        <div className="flex flex-wrap flex-col items-start justify-start gap-4 mt-4">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-lg font-bold">Portfolio Website</h3>
            <p className="text-gray-400 text-center sm:text-left">
            A modern portfolio website with light/dark mode, smooth animations, responsive layout, and SEO optimization.
            </p>
            <p className="text-gray-400 text-center sm:text-left">
            Tech Stack: Tailwind CSS, Next.js
            </p>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-lg font-bold">Facebook Clone</h3>
            <p className="text-gray-400 text-center sm:text-left">
            A UI clone of Facebook focusing on layout accuracy, responsive design, and component structure.
            </p>
            <p className="text-gray-400 text-center sm:text-left">
              Tech Stack: Tailwind CSS, Next.js
            </p>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-lg font-bold">Instagram Clone</h3>
            <p className="text-gray-400 text-center sm:text-left">
            A UI clone of Instagram focusing on layout accuracy, responsive design, and component structure.
            </p>
            <p className="text-gray-400 text-center sm:text-left">
              Tech Stack: Tailwind CSS, Next.js
            </p>
          </div>
        </div>
      </div>
      {/* Skills */}
      <div className="flex flex-col items-center justify-center sm:items-start sm:text-left space-y-4">
        <h2 className="text-2xl font-bold">Skills</h2>
        <div className="flex flex-wrap flex-col items-center justify-center sm:items-start sm:text-left gap-4 mt-4">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-md font-medium text-gray-400">Responsive Design</h3>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-md font-medium text-gray-400">UI/UX Implementation</h3>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-md font-medium text-gray-400">SEO Optimization & Performance</h3>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-md font-medium text-gray-400">API Integration & Database Management</h3>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-md font-medium text-gray-400">Version Control & Collaboration</h3>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-md font-medium text-gray-400">Problem Solving & Debugging</h3>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-md font-medium text-gray-400">Continuous Learning & Adaptability</h3>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-md font-medium text-gray-400">Clean Code & Maintainability</h3>
          </div>
        </div>
      </div>
      {/* experience */}
      <div className="flex flex-col items-center justify-center sm:items-start sm:text-left space-y-4">
        <h2 className="text-2xl font-bold">Work Experience & Education</h2>
        <div className="flex flex-wrap flex-col items-center justify-center sm:items-start sm:text-left gap-4 mt-4">
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-lg font-bold">Web Developer</h3>
            <p className="text-gray-400 text-center sm:text-left">
              A web developer with a passion for building modern, responsive, and user-friendly web applications.
            </p>
            <p className="text-gray-400 text-center sm:text-left">
              Tech Stack: HTML, CSS, JavaScript,Tailwind CSS, Next.js, TypeScript, Nest.js, Prisma, PostgreSQL,GitHub, Docker
            </p>
          </div>
          <div className="flex flex-col items-center justify-center sm:flex-row sm:items-start sm:text-left">
            <h3 className="text-lg font-bold">Education</h3>
            <p className="text-gray-400 text-center sm:text-left">
              Bachelor of Science in Computer Science, from Build Bright University campus (2020-2023)
            </p>
            <p className="text-gray-400 text-center sm:text-left">
              Graduated in 2023
            </p>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="flex flex-col items-start justify-start ml-4 sm:ml-0">
        <h2 className="text-2xl font-bold">Contact</h2>
        <div className="flex flex-wrap flex-col items-start justify-start gap-4 mt-4">
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-lg font-medium text-gray-400">Email:</h3>
            <a href="mailto:seangsang7@gmail.com" className="text-gray-400 text-left ">seangsang7@gmail.com</a>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-lg font-medium text-gray-400">LinkedIn:</h3>
            <a href="https://www.linkedin.com/in/seang-sang-1234567890/" className="text-gray-400 text-left ">https://www.linkedin.com/in/seang-sang-1234567890/</a>
          </div>
          <div className="flex flex-col items-start justify-start">
            <h3 className="text-lg font-medium text-gray-400">GitHub:</h3>
            <a href="https://github.com/seangsang12" className="text-gray-400 text-left ">https://github.com/seangsang12</a>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="flex flex-col items-center justify-center space-y-4 py-4 ">
        <p className="text-gray-400 text-center border-t-2 border-gray-400 w-full"></p>
        <p className="text-gray-400 text-center">© 2026 Seang Sang. All rights reserved.</p>
      </div>
    </div>
  );
}
