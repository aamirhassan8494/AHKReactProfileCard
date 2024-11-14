import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

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
      <Skill skill="React" emoji="👍" color="red" />
      <Skill skill="Javascript" emoji="❤️" color="orange" />
      <Skill skill="HTML+ CSS" emoji="😊" color="green" />
      <Skill skill="Tailwind" emoji="😊" color="orangered" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
