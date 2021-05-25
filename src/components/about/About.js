import "../../styles/about.css";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

function About() {
  const img =
    "https://scontent-sin6-3.xx.fbcdn.net/v/t1.6435-1/p240x240/51328971_1479556668841765_1729438228924071936_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeGChmM_29uz2_0Vuyrgd0kTjrJdQcSTzLmOsl1BxJPMuVbsc6QAhf9qXmKX_NXurXMLXfjrmOw4DcgYTb0Gh1rG&_nc_ohc=ICTv98Z4pQsAX_4BKaB&_nc_ht=scontent-sin6-3.xx&tp=6&oh=906be4f3a81243c3510e80e08eac5300&oe=60D194F5";
  const profile = {
    name: "Surayut Boonklay",
    nickname: "Puen",
    email: "surayut.boonklay@gmail.com",
    phone: "090-928-9584",
  };
  const git = "https://github.com/surayut99";
  const text =
    "I am a Computer Science student at Computer Science, Science Department, KasetSart University";

  return (
    <div id="about">
      <div className="content-container">
        <h1 id="about-header">ABOUT</h1>
        <div
          id="img-profile-container"
          className="d-flex justify-content-center"
        >
          <img id="img-profile" src={img} alt="profile_picture" />
        </div>

        <div id="detail-container" className="text-center text-white">
          <h1>{profile.name}</h1>
          <h4>({profile.nickname})</h4>
          <p>{text}</p>
        </div>

        <div
          id="contact-container"
          className="d-flex justify-content-center flex-column"
        >
          <div className="contact-item d-flex align-items-center text-white">
            <FaEnvelope className="icon" />
            <h6>{profile.email}</h6>
          </div>

          <div className="contact-item d-flex align-items-center text-white">
            <FaPhoneAlt className="icon" />
            <h6>{profile.phone}</h6>
          </div>

          <div className="contact-item d-flex align-items-center text-white">
            <AiFillGithub className="icon" />
            <a href={git} target="_blank" rel="noreferrer" className="h6">
              surayut99
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
