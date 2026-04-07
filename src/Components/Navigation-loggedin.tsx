

import useStore from "./ZustandStore";

interface Image {
    url: string;
    height: number;
    width: number;
}

interface ProfileProps {
    ProfileData: {
        images: Image[];
    } | null;
}

function NavigationLoggedin({}:ProfileProps) {

    const profileData = useStore((state: any) => state.profileData);
    const ProfileImageUrl = profileData?.images?.[0]?.url;

    return (
        <div className="loggedin-image">
            <img src={ProfileImageUrl} />
        </div>
    );
};

export default NavigationLoggedin;