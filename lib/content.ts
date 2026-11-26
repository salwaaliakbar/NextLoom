// All site copy that changes often lives here. Edit content, not components.

export const site = {
  name: "NextLoom",
  tagline: "AI-first IT services & consulting",
  description:
    "NextLoom is an AI-first IT services and consulting studio. We design AI agents, automate workflows, and build production-ready ML and data solutions.",
  // TODO: replace with the real address before launch
  email: "hello@nextloom.ai",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#automation", label: "Automation" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Clients" },
];

export const techStack = [
  "Python",
  "LLMs & RAG",
  "LangChain / LangGraph",
  "n8n · Make · Zapier",
  "PyTorch · scikit-learn",
  "FastAPI",
  "React · Next.js",
  "Node.js · TypeScript",
  "React Native · Flutter",
  "PostgreSQL · MongoDB",
  "AWS · Azure · GCP",
  "Power BI · Streamlit",
];

export type Service = {
  icon: string;
  title: string;
  body: string;
  ticks?: string[];
  featured?: boolean;
};

export const services: Service[] = [
  {
    icon: "🤖",
    title: "AI Agents & Multi-Agent Systems",
    body: "Custom agents that handle real tasks inside your existing tools, with smart task routing, safety guardrails and a clear admin dashboard.",
    ticks: ["Support, sales & ops agents", "Tool & API integrations", "Human-in-the-loop controls"],
    featured: true,
  },
  {
    icon: "⚙️",
    title: "Workflow & Business Automation",
    body: "We map your manual processes, then automate them: data entry, reporting, document processing, approvals and notifications.",
    ticks: ["Process mapping & ROI audit", "n8n / Make / custom pipelines", "CRM, ERP & email automation"],
    featured: true,
  },
  {
    icon: "🧠",
    title: "Machine Learning & Data Science",
    body: "Classification, forecasting, NLP and sentiment analysis, from data cleaning and feature engineering to well-optimized models.",
  },
  {
    icon: "💬",
    title: "LLM Apps & RAG",
    body: "Chatbots and assistants grounded in your own documents and data, with evaluation, monitoring and cost control built in.",
  },
  {
    icon: "📊",
    title: "Data Engineering & Dashboards",
    body: "Reliable pipelines and dashboards that turn raw data into insights your team can act on.",
  },
  {
    icon: "🧭",
    title: "AI Strategy & IT Consulting",
    body: "Find where AI actually pays off. We assess, prioritize, and plan a roadmap that fits your stack, budget and timeline.",
  },
  {
    icon: "🖥️",
    title: "Full-Stack Web Development",
    body: "Complete web applications built end to end, from interface and backend to database, APIs and deployment, ready to grow with your business.",
    ticks: ["Web apps, portals & SaaS products", "Frontend, backend, APIs & databases", "Cloud deployment & ongoing support"],
  },
  {
    icon: "📱",
    title: "Mobile App Development",
    body: "Fast, reliable mobile apps for iOS and Android, designed around your users and connected to your systems, data and AI features.",
    ticks: ["iOS & Android apps", "Native or cross-platform builds", "AI features & backend integration"],
  },
];

export const flowSteps = [
  { title: "Trigger", body: "New email, form, ticket or file arrives" },
  { title: "Understand", body: "AI extracts, classifies & enriches the data" },
  { title: "Route", body: "Agent picks the right action or the right person" },
  { title: "Act", body: "Updates CRM, drafts replies, creates reports" },
  { title: "Guard", body: "Guardrails, approvals & audit logs" },
];

export const automationStats = [
  { value: "24/7", label: "Agents that never clock out" },
  { value: "Days", label: "not months, to a first working pilot" },
  { value: "100%", label: "Code & documentation you own" },
];

export const processSteps = [
  { title: "Discover", body: "We learn your workflow, goals and constraints, and identify where AI adds real value." },
  { title: "Design", body: "Architecture, data plan and success metrics, agreed before any code is written." },
  { title: "Build", body: "Short iterations with regular demos. Clean, documented, production-ready code." },
  { title: "Launch & Support", body: "Deployment, handover, training and ongoing improvement as your needs grow." },
];

export const whyUs = [
  { title: "Business-first", body: "We start from your workflow and ROI, not from the latest model." },
  { title: "Production-ready", body: "Clean, tested, documented code that your team can own." },
  { title: "Responsive communication", body: "Clear updates, quick replies and proactive suggestions." },
  { title: "Safe by design", body: "Guardrails, privacy and human oversight built into every AI system." },
];

export type Testimonial = {
  author: string;
  country: string;
  flag: string;
  tag?: string;
  quote: string;
};

// REAL client reviews from Dr. Bushra's freelance profile.
// Only light spelling fixes / trimming. Never invent or embellish.
export const testimonials: Testimonial[] = [
  {
    author: "mitchellbraden",
    country: "United Kingdom",
    flag: "🇬🇧",
    tag: "AI Agents",
    quote:
      "Working with Bushra was an absolute pleasure. She took the time to truly understand our workflow, from mapping out manual tasks to designing custom AI agents that integrate seamlessly with our existing tools. The setup, complete with smart task routing, safety guardrails and a clear admin dashboard, was delivered ahead of schedule. If you are looking to build multi-agent workflows and elevate your business operations, I cannot recommend Bushra highly enough!",
  },
  {
    author: "mexijen19",
    country: "United States",
    flag: "🇺🇸",
    tag: "ML & Data Science",
    quote:
      "Fantastic work! Bushra and her team delivered a complete end-to-end ML and Data Science solution covering everything from data cleaning and feature engineering to NLP and sentiment analysis. The models were well-optimized, the dashboard made the insights easy to understand, and the code was clean, documented, and production-ready.",
  },
  {
    author: "samdude7",
    country: "United States",
    flag: "🇺🇸",
    quote:
      "Dr. Bushra did an amazing job with the project. Communication was clear and she was very responsive to my messages and also proactive with suggestions on making the project better. The project was complicated but was completed with no difficulty. I am looking forward to building more projects with Dr. Bushra.",
  },
  {
    author: "wyneisha_w",
    country: "United States",
    flag: "🇺🇸",
    tag: "ML Classification",
    quote:
      "Dr. Bushra and her team did an exceptional job bringing my vision to life for a machine learning tool that auto-classifies metadata. They followed directions precisely, communicated clearly and promptly, and demonstrated a strong work ethic throughout. I highly recommend Dr. Bushra and her team for any advanced ML or AI-based development project.",
  },
  {
    author: "danymiclern",
    country: "Canada",
    flag: "🇨🇦",
    quote:
      "Outstanding experience! Bushra delivered the work on time with great accuracy and professionalism. Communication was smooth, and their strong team collaboration really made the project run efficiently. Highly recommended for anyone looking for fast, reliable, and quality service!",
  },
  {
    author: "george_liyce",
    country: "United Kingdom",
    flag: "🇬🇧",
    quote:
      "Bushra did a really great job, which was beyond all my expectations! Very good work delivered in a very short time. Communication was also flawless. I look forward to the next time.",
  },
  {
    author: "brevisjems",
    country: "United States",
    flag: "🇺🇸",
    quote:
      "Wow, this is absolutely perfect! The work is exactly what I needed and I really appreciate the attention to detail and the professionalism throughout. You made everything smooth and stress-free. I'll be sure to reach out again for future tasks.",
  },
  {
    author: "fiza_ali36",
    country: "Pakistan",
    flag: "🇵🇰",
    quote:
      "Dr. Bushra and her team are so professional. Their level of work and understanding is good, the documentation is perfect, and the work was delivered before time.",
  },
  {
    author: "study101xxx",
    country: "United Kingdom",
    flag: "🇬🇧",
    tag: "Repeat client",
    quote: "Always exceptional work! Amazing quality.",
  },
];
