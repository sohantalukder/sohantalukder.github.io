import { ReactComponent as HomeIcon } from "../../assets/svg/Home.svg";
import { ReactComponent as ServicesIcon } from "../../assets/svg/Services.svg";
import { ReactComponent as WorkIcon } from "../../assets/svg/work.svg";
import { ReactComponent as EducationIcon } from "../../assets/svg/eduction.svg";
import { ReactComponent as BlogIcon } from "../../assets/svg/blog.svg";
import { ReactComponent as ChatIcon } from "../../assets/svg/chat.svg";
import { ReactComponent as Facebook } from "../../assets/svg/facebook.svg";
import { ReactComponent as Github } from "../../assets/svg/github.svg";
import { ReactComponent as Instagram } from "../../assets/svg/instagram.svg";
import { ReactComponent as LinkedIn } from "../../assets/svg/linkedin.svg";
import { ReactComponent as Twitter } from "../../assets/svg/twitter.svg";
const Icon = ({ name, ...props }) => {
    const iconTypes = {
        HomeIcon,
        ServicesIcon,
        WorkIcon,
        EducationIcon,
        BlogIcon,
        ChatIcon,
        Facebook,
        Github,
        Instagram,
        LinkedIn,
        Twitter,
    };
    const ShowIcon = iconTypes[name];
    return <ShowIcon {...props} />;
};
export { Icon };
