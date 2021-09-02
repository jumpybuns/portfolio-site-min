import Link from "next/link";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Footer = () => {
  return (
    <footer>
      <Link href={"https://github.com/jumpybuns"} passHref>
        <a target="_blank">
          <GitHubIcon />
        </a>
      </Link>
      <Link href={"mailto:ethanpiercepresents@gmail.com"} passHref>
        <a target="_blank">
          <EmailIcon />
        </a>
      </Link>
      <Link href={"https://www.linkedin.com/in/ethanpiercepresents/"} passHref>
        <a target="_blank">
          <LinkedInIcon />
        </a>
      </Link>
      <p>Copyright 2021 Ethan Pierce</p>
    </footer>
  );
};

export default Footer;
