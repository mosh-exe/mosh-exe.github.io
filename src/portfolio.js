const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mosh-exe.github.io/portfolio',
  title: 'MS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mohammed Shahwan',
  role: 'Software Engineer',
  description:
    'Strong problem-solving and mathematical skills, creativity, and innovative thinking, attention to detail, a keen awareness of safety issues, written and verbal communication skills, and skills in time management.',
  resume: 'http://www.cs.mun.ca/~mohammeds/MohammedShahwan.pdf',
  social: {
    linkedin: 'https://linkedin.com/in/momosh',
    github: 'https://github.com/mosh-exe',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Killick 1 CubeSat',
    description:
      "A GNSS Reflectometry CubeSat for Measuring Sea Ice Thickness and Extent. Newfoundland and Labrador's first Earth observation satellite.",
    stack: ['Python', 'Flask', 'Grafana', 'InfluxDB'],
    livePreview: 'https://c-core.ca/2018/05/31/killick-1/',
  },
  {
    name: 'Covid Test Results',
    description:
      'Covid Test Results is a automation project used to web scrape your most recent covid test results from the Health NL website and send the results via text message to your cell phone.',
    stack: ['BeautifulSoup', 'Python', 'Twilio', 'Shell'],
    sourceCode: 'https://github.com/mosh-exe/CovidTestResults',
  },
  {
    name: 'U-Calendar',
    description:
      'U-Calendar is a desktop calendar application specifically designed for students to facilitate managing multiple courses. U-Calendar provides the user with an optimized schedule and considers various constraints.',
    stack: ['Java', 'JavaFx','Maven', 'Git'],
    sourceCode: 'https://github.com/mosh-exe/U-Calendar',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'C++',
  'C',
  'C#',
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'PHP',
  'Latex',
  'React',
  'Vue',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mohammeds@mun.ca',
}

export { header, about, projects, skills, contact }
