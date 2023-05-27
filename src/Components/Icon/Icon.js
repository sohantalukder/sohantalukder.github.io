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
import { ReactComponent as Extra } from "../../assets/svg/extra.svg";
import { ReactComponent as Download } from "../../assets/svg/download.svg";
import { ReactComponent as Phone } from "../../assets/svg/iphone.svg";
import { ReactComponent as Email } from "../../assets/svg/sent.svg";
import { ReactComponent as Address } from "../../assets/svg/location.svg";
import { ReactComponent as Copy } from "../../assets/svg/Copyright.svg";
import { ReactComponent as Web } from "../../assets/svg/web-development.svg";
import { ReactComponent as App } from "../../assets/svg/mobile-development.svg";
import { ReactComponent as Design } from "../../assets/svg/sketch.svg";
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
        Extra,
        Download,
        Phone,
        Email,
        Address,
        Copy,
        Web,
        App,
        Design,
    };
    const ShowIcon = iconTypes[name];
    return <ShowIcon {...props} />;
};
export { Icon };
