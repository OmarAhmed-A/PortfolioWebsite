export const content = {
  name: 'Omar Ahmed Elsayed',
  role: 'Data Engineer II',
  company: 'Raisa Energy',
  location: 'Cairo, Egypt',
  email: 'omar@omarx.uk',
  site: 'omarx.uk',
  linkedin: 'https://linkedin.com/in/omarahmed-oa',
  github: 'https://github.com/OmarAhmed-A',

  heroHeadline: 'Data Engineer building reliable data & LLM systems.',
  heroSub:
    'Data Engineer II at Raisa Energy. I design Snowflake and dbt pipelines that ingest 100+ GB weekly, cut build times by 70%, and ship RAG-powered natural-language-to-SQL tools.',

  stats: [
    { value: '70%', label: 'faster dbt builds' },
    { value: '100+ GB', label: 'ingested weekly' },
    { value: '5.2M+', label: 'wells migrated, 0.00% variance' },
    { value: '42M', label: 'rows exact-match validated' },
  ],

  experience: [
    {
      title: 'Data Engineer II',
      company: 'Raisa Energy',
      period: 'Apr 2026 – Present',
      location: 'Cairo, Egypt',
      bullets: [
        'Migrated a critical third-party upstream feed from legacy ETL middleware to a direct Snowflake feed; validated 5.2M+ wells and 599 columns with 100% match, 0.00% volume variance, zero breaking changes, and $30K/year in avoided licensing/compute costs.',
        'Rewrote a full-table accounting export as an incremental shadow-table pipeline with row-hash change tracking; exact-match validated up to 42M rows and scoped failures to affected business groups only.',
        'Containerized a third-party Python extraction pipeline for Snowpark with OAuth2, external access, persistent log volumes, and scheduled execution.',
        'Aligned accounting teams and third-party providers on stable source identifiers, effective-date rules, and publish semantics for downstream integrations.',
      ],
    },
    {
      title: 'Data Engineer I',
      company: 'Raisa Energy',
      period: 'Oct 2024 – Apr 2026',
      location: 'Cairo, Egypt',
      bullets: [
        'Engineered dbt incremental strategies and custom SCD Type II materializations, cutting pipeline build times by 70%.',
        'Built extraction pipelines for APIs, websites, and emails; ingesting 100+ GB of unstructured data weekly into Blob Storage and Snowflake.',
        'Developed an SQL-based RAG natural-language-to-SQL app, enabling non-technical stakeholders to self-serve analytics.',
        'Architected Azure DevOps CI/CD with automated testing and key-pair auth; automated GCM authentication with Azure UAMI, eliminating manual PAT rotation.',
        'Authored dbt/SQL best practices and built an issue-tracking integration linking Azure DevOps, Slack, and email.',
      ],
    },
    {
      title: 'Software Engineer — AI Training Data (Freelance)',
      company: 'Outlier.AI',
      period: 'Jun 2024 – Present',
      location: 'Remote',
      bullets: [
        'Provided expert-level human feedback on LLM outputs for SQL and Python tasks, improving model accuracy and relevance.',
        'Evaluated and annotated model outputs; flagged errors and guided iterative improvements with engineering teams.',
      ],
    },
    {
      title: 'Data Engineering Intern',
      company: 'Raisa Energy',
      period: 'Jul 2024 – Sep 2024',
      location: 'Cairo, Egypt',
      bullets: [
        'Modernized legacy infrastructure and optimized data models powering mission-critical Power BI dashboards.',
      ],
    },
    {
      title: 'Subject Matter Expert & Technical Support Agent',
      company: 'Teleperformance Egypt (Offshore)',
      period: 'Jun 2023 – Dec 2023',
      location: 'Cairo, Egypt',
      bullets: [
        'Resolved complex customer issues on an offshore account while following strict quality and PCI-compliance data-security standards.',
        'Trained and onboarded new agents on tooling, knowledge bases, and support procedures.',
      ],
    },
  ],

  projects: [
    {
      name: 'Wren AI',
      tag: 'Open Source Contributor',
      description:
        'Resolved critical backend bugs in a leading open-source text-to-SQL engine; PRs merged with the core engineering team.',
      link: 'https://github.com/Canner/WrenAI',
    },
    {
      name: 'AIoT Smart Shopping Cart',
      tag: 'Winner — Arab AIoT Challenge & EGAIOT',
      description:
        '2nd place at AUC Hackathon; exhibited at GITEX Global. Partnered with Spinneys and Quanttronix; built a real-time analytics dashboard and Expo (React Native) consumer app.',
      link: null,
    },
    {
      name: 'Intelligent Maze Agent',
      tag: 'Dell Hacktrick — Top 10 of 200+ teams',
      description:
        'Ranked 7th in the final phase and won the best-spirit-team award. Developed a DQN maze-solving agent with TensorFlow/PyTorch, trained on AWS EC2.',
      link: null,
    },
  ],

  skillGroups: [
    {
      group: 'Data Engineering',
      items: ['dbt', 'Snowflake', 'PostgreSQL', 'Jinja', 'ELT/ETL', 'Data Modeling', 'Blob Storage', 'Web Scraping'],
    },
    { group: 'AI & LLMs', items: ['LLM Ops', 'RAG', 'Vector Databases', 'Text-to-SQL', 'Agentic AI'] },
    { group: 'Languages', items: ['Python', 'SQL', 'Bash', 'Go', 'C/C++', 'JavaScript'] },
    { group: 'Cloud & DevOps', items: ['Azure DevOps', 'AWS', 'Docker', 'Linux', 'Git', 'CI/CD', 'Snowpark'] },
    { group: 'Visualization', items: ['Power BI', 'Streamlit', 'React', 'Plotly'] },
  ],

  education: {
    school: 'Arab Academy for Science, Technology and Maritime Transport (AAST)',
    degree: 'B.Sc. Computer Engineering',
  },

  certifications: [
    {
      title: 'ALX 13-Month Data Science — ExploreAI, sponsored by Mastercard',
      link: 'https://savanna.alxafrica.com/certificates/r7ZYpEcPJm',
    },
    {
      title: 'NVIDIA DLI: Fundamentals of Deep Learning',
      link: 'https://courses.nvidia.com/certificates/5d58177d4fb040e2afbf8aca6deb30db/',
    },
    {
      title: 'Udacity: Machine Learning Cross-Skilling Nanodegree',
      link: 'https://confirm.udacity.com/DU5NCRMP',
    },
    {
      title: 'Udacity: Data Analysis Nanodegree',
      link: 'https://graduation.udacity.com/confirm/LRDA44QV',
    },
    {
      title: 'Visa Token Service Technology Virtual Experience — Forage',
      link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Visa/8ebZgyZyLA6h5gyqt_Visa_CxSSnup6ZjYxTvK6e_1676647035163_completion_certificate.pdf',
    },
  ],

  volunteering: [
    {
      role: 'Technical Instructor & Lecturer',
      org: 'IEEE AAST Cairo Student Branch',
      period: 'Sep 2022 – Sep 2024',
      description:
        'Designed Python workshops and mentored 100+ students in coding and debugging; built a Python teaching program for IEEE Women in Engineering; R&D on a micro-mouse maze-solving robot; helped organize the IEEE Explore programming competition.',
    },
    {
      role: 'Entrepreneurs Team Member',
      org: 'Enactus AAST',
      period: 'Sep 2020 – Feb 2021',
      description:
        'Collaborated on UN SDG-aligned entrepreneurship projects; authored research reports and presented solutions in biweekly meetings.',
    },
  ],
};
