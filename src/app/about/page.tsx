import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";

export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">About Me</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          With over 8 years of software development experience, I specialize in
          mobile applications using React Native, as well as native development
          with Kotlin and Swift. I have developed dynamic user interfaces with
          React and worked extensively with backend frameworks such as Django,
          Express, and ASP.NET to create robust APIs. My experience includes
          using PostgreSQL and MongoDB for data management, as well as SQLite
          and SQL databases. I also utilize TypeScript to enhance code quality.
          This combination of mobile and backend expertise allows me to
          effectively contribute to full-stack projects.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  );
}
