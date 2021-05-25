import "../../styles/projects.css";
import ReactMarkDown from "react-markdown";
import gfm from "remark-gfm";

function Card(props) {
  return (
    <div className="project-card">
      <ReactMarkDown children={props.content} remarkPlugins={[gfm]} />
    </div>
  );
}

export default Card;
