import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-gray-400">Available for freelance work</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
          Hi, I'm{' '}
          <span className="gradient-text">Sergio Castro</span>
        </h1>

        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-400 mb-6">
          Full-Stack Developer
        </h2>

        <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-10">
          I build modern web applications with React, Node.js, and MongoDB.
          Passionate about creating elegant solutions to complex problems.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="#projects"
            className="gradient-bg text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-gray-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Contact Me
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com/castrosergio1008"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-700 transition-all"
          >
            <GithubIcon size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-700 transition-all"
          >
            <LinkedinIcon size={20} />
          </a>
          <a
            href="mailto:castrosergio1008@gmail.com"
            className="p-3 bg-gray-900 border border-gray-800 rounded-lg text-gray-400 hover:text-white hover:border-gray-700 transition-all"
          >
            <Mail size={20} />
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-gray-500" />
        </div>
      </div>
    </section>
  )
}
