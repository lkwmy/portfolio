export const aboutMe = {
  description: [
    "I am a Full Stack Developer proficient in React.js, React Native, Laravel, .NET, and Symfony. I also have strong experience with Microsoft low-code tools such as Power Apps and Power Automate, allowing me to deliver efficient and scalable solutions across a wide range of technologies.",
  ],
  cvPath: "/assets/CV.pdf", // Upload your own CV in /public/assets as CV.pdf
  cvFileNameAfterDownload: "ElKoumi Mohamed Aziz CV.pdf", // This is what the name of the file is going to be when downloaded
};

export const technicalSkills: Record<string, string[]> = {
  // You can rename the type of skills, it's dynamically rendered. eg: You can change "Programming Languages" -> to just "Languages"
  "Plateforme Microsoft" : ["Power Apps", "Power Automate, Power BI", "Power FX", "Power Query", "Dataverse", "Dynamics 365", "PCF", "Azure"],
  "Programming Languages": ["JavaScript", "TypeScript", "C#", "C++", "HTML", "CSS", "Python"],
  "Frontend Development": [
    "React(Js, Native)",
    "Next.js",
    "Angular",
    "Vue.Js",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Tailwind",
    "Redux Toolkit",
  ],
  "Backend Development": [
    "LARAVEL",
    "SYMFONY",
    ".NET",
    "SQL",
    "MySQL",
  ],
  "UI/UX Design": [
    "Figma",
    "Penpot"
  ],
  "Tools & Technologies": [
    "Git",
    "GitHub",
    "Agile (Scrum, Jira, Kanban)",
    "Trello",
  ],
  "Soft Skills": [
    "Presentation",
    "Communication",
    "Professional Demeanor",
    "Leadership",
    "Mentorship",
  ],
};
