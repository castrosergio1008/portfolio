const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'JWT Auth', level: 80 },
    ],
  },
  {
    title: 'Database',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'Mongoose', level: 75 },
      { name: 'SQL Basics', level: 70 },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'Vercel', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'Postman', level: 80 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-blue-500 font-semibold text-sm uppercase tracking-wider">
            Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4">
            My{' '}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies I work with to build modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-lg font-bold mb-6 gradient-text">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-gray-400">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full gradient-bg rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="mt-12 bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-lg font-bold mb-6 text-center">
            Also familiar with
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Python', 'Java', 'C', 'PHP', 'Docker', 'Linux', 'REST APIs', 'GraphQL', 'TypeScript', 'Next.js'].map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
