
import useStore from "./ZustandStore";
import { Tooltip } from "react-tooltip";
import 'react-tooltip/dist/react-tooltip.css';


interface Image {
    url: string;
    height: number;
    width: number;
}

interface ProfileProps {
    ProfileData: {
        images: Image[];
        display_name: string;
    } | null;
}

function NavigationLoggedin({ }: ProfileProps) {

    const profileData = useStore((state: any) => state.profileData);
    const ProfileImageUrl = profileData?.images?.[0]?.url;

    return (
        <>
            <div className="loggedin-image"
                data-tooltip-id="my-tooltip"
                data-tooltip-content={`Signed in as ${profileData?.display_name}`}>
                <img src={ProfileImageUrl} />
            </div>

            <Tooltip id="my-tooltip">
            </Tooltip>
        </>

    );
};

export default NavigationLoggedin;