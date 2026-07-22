import { Code, Server, Database, Zap } from 'lucide-react'

const highlights = [
  { icon: Code, label: 'Frontend', value: 'React, Tailwind' },
  { icon: Server, label: 'Backend', value: 'Node.js, Express' },
  { icon: Database, label: 'Database', value: 'MongoDB' },
  { icon: Zap, label: 'Tools', value: 'Git, Vercel, Docker' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Passionate about building{' '}
            <span className="gradient-text">amazing products</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Avatar */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
              <div className="w-48 h-48 gradient-bg rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-6xl">SC</span>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gray-900 border border-gray-800 rounded-xl p-4">
              <p className="text-2xl font-bold gradient-text">3+</p>
              <p className="text-sm text-gray-400">Projects Completed</p>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Full-Stack Developer based in LATAM
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              I'm a passionate developer specializing in modern web technologies.
              I love creating efficient, scalable, and user-friendly applications
              that solve real-world problems.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              With expertise in React, Node.js, and MongoDB, I build full-stack
              applications from concept to deployment. I'm always learning new
              technologies and best practices to deliver the best solutions.
            </p>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-4"
                >
                  <item.icon className="text-blue-500 mb-2" size={24} />
                  <p className="text-sm text-gray-500">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
