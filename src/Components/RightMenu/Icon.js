import { ReactComponent as HomeIcon } from "../../assets/svg/Home.svg";
import { ReactComponent as ServicesIcon } from "../../assets/svg/Services.svg";
import { ReactComponent as WorkIcon } from "../../assets/svg/work.svg";
import { ReactComponent as EducationIcon } from "../../assets/svg/eduction.svg";
import { ReactComponent as BlogIcon } from "../../assets/svg/blog.svg";
import { ReactComponent as ChatIcon } from "../../assets/svg/chat.svg";

export const Icon = ({ name, ...props }) => {
    const iconTypes = {
        HomeIcon,
        ServicesIcon,
        WorkIcon,
        EducationIcon,
        BlogIcon,
        ChatIcon,
    };
    const ShowIcon = iconTypes[name];
    return <ShowIcon {...props} />;
};
