import { FaChartArea, FaChartSimple } from "react-icons/fa6";
import { FaHome } from 'react-icons/fa';
import { IoMoon, IoSunny } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

import { useState } from "react";

import NavigationLoggedin from './Navigation-loggedin.tsx';

import useStore from "./ZustandStore";
import { Link } from "react-router";
import { Tooltip } from "react-tooltip";

import Logout from './Logout.tsx';

interface NavigationProps {
    handleThemeButton: React.MouseEventHandler<HTMLButtonElement>
    isLightOn?: boolean;
}

function Navigation({ handleThemeButton, isLightOn }: NavigationProps) {

    const isLoggedin = useStore((state: any) => state.isLoggedin);
    const isMockData = useStore((state: any) => state.isMockData);

    const [NavOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen(o => !o);

    return (
        <div className="Navigation-container">
            <div className="Navigation">
                <Link to="/">
                    <div className="nav-logo">
                        <FaChartArea style={{ fontSize: '20px' }} />
                        <div className="logo-text">
                            Audio <span id="logo-2">Stats</span>
                        </div>
                    </div>
                </Link>

                <div className="nav-buttons">
                    <div className="nav-button">
                        <button
                            className="theme-button"
                            onClick={handleThemeButton}
                        >
                            {isLightOn ? <IoSunny style={{ fontSize: '1.3rem' }} /> : <IoMoon style={{ fontSize: '1.2rem' }} />}
                        </button>
                    </div>

                    <div className="nav-button">
                        {isLoggedin || isMockData ?
                            <button
                                className="dashboard-button">
                                <Link to="/dashboard">
                                    <FaChartSimple style={{ display: 'flex', alignContent: 'center' }} />
                                    <span>Dashboard</span>
                                </Link>
                            </button>
                            :
                            <> </>
                        }
                    </div>

                    {isLoggedin || isMockData ?
                        <>
                            <Logout />
                            <NavigationLoggedin ProfileData={null} />
                        </>
                        :
                        <div className="nav-button">

                            <div className="loggedin-image"
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="You're Signed Out">
                            </div>

                            <Tooltip id="my-tooltip">
                            </Tooltip>

                        </div>
                    }

                    <button
                        className="nav-hamburger"
                        onClick={toggleNav}>
                        <RxHamburgerMenu />
                    </button>

                    <div className={`navbar-mobile ${NavOpen ? 'visible' : ''}`}>
                        <div className="navbar-mobile-container">
                            <button
                                className="home-button">
                                <Link to="/">
                                    <FaHome style={{ display: 'flex', alignContent: 'center' }} />
                                    <span> Home </span>
                                </Link>
                            </button>

                            <button
                                className="dashboard-button">
                                <Link to="/dashboard">
                                    <FaChartSimple style={{ display: 'flex', alignContent: 'center' }} />
                                    <span> Dashboard </span>
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
