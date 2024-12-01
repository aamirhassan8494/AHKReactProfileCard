import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML and CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "React JS",
    level: "beginner",
    color: "orangered",
  },
  {
    skill: "React Native",
    level: "advanced",
    color: "lightgreen",
  },
  {
    skill: "Git And GitHub",
    level: "Intermediate",
    color: "lightblue",
  },
  {
    skill: "Tailwind",
    level: "advanced",
    color: "green",
  },
  {
    skill: "Bootstrap",
    level: "advanced",
    color: "orange",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="Aamir Hassan.png" alt="Aamir Hasan" />;
}

function Intro() {
  return (
    <div>
      <h1>Aamir Hassan</h1>
      <p>
        Full Stack Web Developer with extensive experience in designing,
        developing, and deploying end-to-end web solutions. Proficient in a wide
        range of technologies, including JavaScript React, Node.js, HTML, CSS,
        Python, and various databases SQL, MongoDB, Aamir has a strong
        understanding of both front-end and back-end development. Known for
        building responsive, user-friendly interfaces and efficient, scalable
        server-side solutions.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skills) => (
        <Skill skill={skills.skill} color={skills.color} level={skills.level} />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "🙇‍♂️"}
        {level === "Intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
