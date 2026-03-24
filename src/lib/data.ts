import { Skill, Project, Certification, Experience } from "@/types";

// Default portfolio data — replace with Supabase fetches when connected
export const defaultSkills: Skill[] = [
  { id: "1", name: "Penetration Testing", category: "offensive", level: 85, icon: "🔓", created_at: "" },
  { id: "2", name: "Network Security", category: "networking", level: 90, icon: "🌐", created_at: "" },
  { id: "3", name: "Malware Analysis", category: "defensive", level: 70, icon: "🦠", created_at: "" },
  { id: "4", name: "Python", category: "programming", level: 88, icon: "🐍", created_at: "" },
  { id: "5", name: "Wireshark", category: "tools", level: 82, icon: "🦈", created_at: "" },
  { id: "6", name: "Burp Suite", category: "tools", level: 78, icon: "🔧", created_at: "" },
  { id: "7", name: "Linux Administration", category: "defensive", level: 92, icon: "🐧", created_at: "" },
  { id: "8", name: "SIEM / Splunk", category: "defensive", level: 75, icon: "📊", created_at: "" },
  { id: "9", name: "Cloud Security (AWS)", category: "cloud", level: 68, icon: "☁️", created_at: "" },
  { id: "10", name: "Digital Forensics", category: "forensics", level: 72, icon: "🔍", created_at: "" },
  { id: "11", name: "Bash Scripting", category: "programming", level: 85, icon: "💻", created_at: "" },
  { id: "12", name: "OWASP Top 10", category: "offensive", level: 90, icon: "🛡️", created_at: "" },
  { id: "13", name: "Nmap", category: "tools", level: 88, icon: "📡", created_at: "" },
  { id: "14", name: "Metasploit", category: "tools", level: 80, icon: "⚔️", created_at: "" },
  { id: "15", name: "ISO 27001", category: "compliance", level: 65, icon: "📋", created_at: "" },
];

export const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Network Intrusion Detection System",
    description: "Built a custom IDS using Python and Scapy that monitors network traffic in real-time, detects anomalies using ML, and generates alerts.",
    tags: ["Python", "Scapy", "Machine Learning", "IDS"],
    github: "#",
    created_at: "",
  },
  {
    id: "2",
    title: "Automated Vulnerability Scanner",
    description: "Developed a web application vulnerability scanner that identifies SQLi, XSS, CSRF, and other OWASP Top 10 vulnerabilities.",
    tags: ["Python", "OWASP", "Web Security", "Automation"],
    github: "#",
    created_at: "",
  },
  {
    id: "3",
    title: "CTF Challenge Platform",
    description: "Created a Capture The Flag platform with challenges spanning crypto, web exploitation, reverse engineering, and forensics.",
    tags: ["Docker", "Node.js", "CTF", "Full-Stack"],
    github: "#",
    created_at: "",
  },
  {
    id: "4",
    title: "Phishing Detection Browser Extension",
    description: "Chrome extension that uses heuristic analysis and ML to detect phishing websites in real-time and warn users.",
    tags: ["JavaScript", "ML", "Chrome Extension", "Phishing"],
    github: "#",
    created_at: "",
  },
];

export const defaultCertifications: Certification[] = [
  { id: "1", name: "CompTIA Security+", issuer: "CompTIA", date: "2024" },
  { id: "2", name: "Certified Ethical Hacker (CEH)", issuer: "EC-Council", date: "2024" },
  { id: "3", name: "AWS Cloud Practitioner", issuer: "Amazon", date: "2023" },
];

export const defaultExperiences: Experience[] = [
  {
    id: "1",
    title: "Cybersecurity Intern",
    company: "Security Operations Center",
    period: "2024 - Present",
    description: "Monitor security events, analyze threats using SIEM tools, and assist in incident response procedures.",
    type: "work",
  },
  {
    id: "2",
    title: "CTF Player",
    company: "HackTheBox / TryHackMe",
    period: "2023 - Present",
    description: "Active participant in CTF competitions. Ranked in top 5% on HackTheBox. Solved 100+ challenges across categories.",
    type: "ctf",
  },
  {
    id: "3",
    title: "Cybersecurity Student",
    company: "University",
    period: "2022 - Present",
    description: "Pursuing degree in Cybersecurity with focus on offensive security, network defense, and digital forensics.",
    type: "education",
  },
];

export const categoryColors: Record<string, string> = {
  offensive: "text-cyber-red border-cyber-red/30 bg-cyber-red/10",
  defensive: "text-cyber-blue border-cyber-blue/30 bg-cyber-blue/10",
  networking: "text-cyber-green border-cyber-green/30 bg-cyber-green/10",
  tools: "text-cyber-yellow border-cyber-yellow/30 bg-cyber-yellow/10",
  programming: "text-cyber-purple border-cyber-purple/30 bg-cyber-purple/10",
  cloud: "text-sky-400 border-sky-400/30 bg-sky-400/10",
  forensics: "text-orange-400 border-orange-400/30 bg-orange-400/10",
  compliance: "text-gray-400 border-gray-400/30 bg-gray-400/10",
};

export const categoryLabels: Record<string, string> = {
  offensive: "Offensive Security",
  defensive: "Defensive Security",
  networking: "Networking",
  tools: "Tools & Frameworks",
  programming: "Programming",
  cloud: "Cloud Security",
  forensics: "Digital Forensics",
  compliance: "Compliance & GRC",
};
