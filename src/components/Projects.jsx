import { ExternalLink, Github, ArrowRight } from 'lucide-react'

const projects = [
  {
    title: 'SaaSify Landing Page',
    description: 'Modern, responsive landing page for a SaaS product. Built with React and Tailwind CSS featuring smooth animations and conversion-optimized design.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tech: ['React', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/castrosergio1008/saasify-landing',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Manager API',
    description: 'Complete REST API with JWT authentication, MongoDB, Swagger documentation, and full CRUD operations. Deployed on Vercel with MongoDB Atlas.',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    github: 'https://github.com/castrosergio1008/task-manager-api-',
    live: 'https://task-manager-api-lilac.vercel.app',
    featured: true,
  },
  {
    title: 'Dashboard Admin',
    description: 'Full-featured admin dashboard with interactive charts, task management, and responsive design. Integrates with the Task Manager API.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tech: ['React', 'Recharts', 'Context API', 'Tailwind CSS'],
    github: 'https://github.com/castrosergio1008/dashboard-admin',
    live: '#',
    featured: true,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in
            full-stack development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300"
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                
                {/* Links overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-gray-900/90 rounded-full text-white hover:bg-gray-800 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Project content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  {project.featured && (
                    <span className="px-2 py-0.5 bg-blue-500/20 text-blue-400 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View project link */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-medium group/link"
                >
                  View Project
                  <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/castrosergio1008"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            <Github size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
