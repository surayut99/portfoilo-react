import "../styles/skills.css";

function ProgrammingIcon(props) {
  return (
    <div className="programming-lang">
      <div className="programming-icon">
        <img
          src={
            require(`../images/icons/${props.lang.toLowerCase()}.png`).default
          }
          alt={props.lang}
        />
      </div>
      <h5>{props.lang}</h5>
    </div>
  );
}

export default ProgrammingIcon;
