
import { Skeleton } from "@mantine/core";
import { CopyIcon } from "@radix-ui/react-icons";
import { IoAlertOutline, IoPersonCircle, IoSparkles } from "react-icons/io5";
import Toastify from "toastify-js";

interface ProfileProps {
    ProfileData: {
        images: Image[];
        display_name: string;
        followers: { href: string; total: number };
        external_urls: { spotify: string };
        product: string;
    } | null;
}

interface Image {
    url: string;
    height: number;
    width: number;
}

function CopyLink({ ProfileData }: ProfileProps) {

    if (ProfileData?.external_urls?.spotify) {
        navigator.clipboard.writeText(ProfileData.external_urls.spotify);

        Toastify({
            className: "Toast",
            text: "link copied to clipboard",
            duration: 3000,
            newWindow: false,
            gravity: "bottom",
            position: "right"

        }).showToast();
    }
}

function Profile({ ProfileData }: ProfileProps) {

    // pick the first image in the images array (if any)
    const profileImageUrl = ProfileData?.images?.[0]?.url;

    return (
        <section className="Profile">
            <div className="profile-top">

                <div className="profile-info">
                    <div className="profile-name">
                        Welcome, {ProfileData?.display_name || 'user'} 👋
                    </div>

                    <div className="profile-img-mobile">
                        {profileImageUrl ?
                            <img src={profileImageUrl} alt="profile" width="200" height="200" /> :
                            <div className="img-skeleton-mobile">
                                <Skeleton animate={true} height={200} circle mb={"xl"} />
                            </div>
                        }
                    </div>

                    <div className="user-info-container">

                        <div className="user-link">
                            {ProfileData?.external_urls?.spotify ? (
                                <a onClick={() => CopyLink({ ProfileData })}>
                                    <CopyIcon />
                                    {ProfileData.external_urls.spotify}
                                </a>
                            ) : (
                                <a>
                                    <IoAlertOutline />
                                    Profile link not found
                                </a>
                            )}
                        </div>

                        <div className="user-accountBadge">
                            {ProfileData?.product ? (
                                <a>
                                    <IoSparkles />
                                    {ProfileData?.product}
                                </a>
                            ) : (
                                <a>
                                    <IoAlertOutline />
                                    Account type not found
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="profile-img">
                    {profileImageUrl ?
                        <img src={profileImageUrl} alt="profile" width="200" height="200" /> 
                        : <div className="personIcon"> 
                         <IoPersonCircle  style={{fontSize: '30px'}}/>
                        </div>

                    }
                </div>
            </div>

            <div className="profile-stats">

                <div className="stat-item">
                    <span className="stat-number">0</span>
                    <span className="stat-text">Playlists</span>
                </div>

                <div className="stat-item">
                    <span className="stat-number">{ProfileData?.followers?.total || '0'}</span>
                    <span className="stat-text">Followers</span>
                </div>

                <div className="stat-item">
                    <span className="stat-number">50</span>
                    <span className="stat-text">Songs listened</span>
                </div>

            </div>
        </section>
    )
}

export default Profile;