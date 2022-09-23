import style from "../components/Box.css";

export function Box(props) {
  return (
    <div className="boxProjects">
      <h2>{props.title}</h2>
      <a target="_blank" href={props.link}>
        Veja Todos
      </a>
    </div>
  );
}
