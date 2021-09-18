import "./styles/footer.css";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div className="footer">
      <p className="copyrights">© 2021 copyrights</p>
      <p className="me">Written By Madyan Nassar</p>
      <div className="social">
        <SocialIcon
          className="github-icon"
          url="https://github.com/MadyanNassar"
        />
        <SocialIcon url="https://www.linkedin.com/in/madyan-nassar/" />
      </div>
    </div>
  );
};

export default Footer;
