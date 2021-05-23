import "../styles/skills.css";

function ProgrammingIcon(props) {
  return (
    <div class="programming-lang mb-2">
      <div class="programming-icon">
        <img
          src={
            require(`../pictures/icons/${props.lang.toLowerCase()}.png`).default
          }
          alt=""
          srcset=""
        />
      </div>
      <h5>{props.lang}</h5>
    </div>
  );
}

export default ProgrammingIcon;
