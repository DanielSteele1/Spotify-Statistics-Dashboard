import Profile from './Profile.tsx';
import TopGenres from './TopGenres.tsx';
import Artists from './TopArtists.tsx';
import TopSongs from './TopSongs.tsx'
import MonthlyActivity from './MonthlyActivity.tsx';
import RecentlyListened from './RecentlyListened.tsx';
import CurrentSong from './CurrentSong.tsx';

import { useEffect, useState } from 'react';
import Toastify from 'toastify-js';
import { Skeleton } from '@mantine/core';

import useStore from './ZustandStore.tsx';

import './Skeleton.css';

function Main() {

    //fetch userData
    const access_token = localStorage.getItem('access_token');

    const profileData = useStore((state: any) => state.profileData);
    const setProfileData = useStore((state: any) => state.setProfileData);

    const isLoading = useStore((state: any) => state.isLoading);
    const setLoading = useStore((state: any) => state.setLoading);

    const isLoggedin = useStore((state: any) => state.isLoggedin);
    const setLoggedin = useStore((state: any) => state.setLoggedin);


    const [mostStreamed_Artists, setMostStreamedArtists] = useState(null);
    const [mostStreamedSongs, setMostStreamedSongs] = useState(null);
    const [currentSong, setCurrentSong] = useState(null);
    const [RecentlyListened_data, setRecentlyListened] = useState(null);

    useEffect(() => {

        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);

    }, []);

    useEffect(() => {

        async function fetchMostStreamedArtists() {

            const response = await fetch("https://api.spotify/com/v1/me/top/artists?limit=5&time_range=short_term", {

                method: "GET",
                headers: { Authorization: `Bearer ${access_token}` },
            });

            const Artist_data = await response.json();
            setMostStreamedArtists(Artist_data);
            console.log(Artist_data);
        }

        async function fetchMostStreamedSongs() {

            const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=10&time_range=short_term", {

                method: "GET",
                headers: { Authorization: `Bearer ${access_token}` },
            });

            const MSS_data = await response.json();
            setMostStreamedSongs(MSS_data);
            console.log(MSS_data);
        }

        async function fetchRecentlyListened() {

            const response = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=20", {

                method: "GET",
                headers: { Authorization: `Bearer ${access_token}` },
            });

            const RecentlyListened_data = await response.json();
            setRecentlyListened(RecentlyListened_data);
            console.log(RecentlyListened_data);

        }

        async function fetchProfile() {

            const response = await fetch("https://api.spotify.com/v1/me", {
                method: "GET",
                headers: { Authorization: `Bearer ${access_token}` },
            });

            const profile_data = await response.json();
            setProfileData(profile_data);
            console.log(profile_data);
        }

        // trigger logged in state
        LoggedIn();

        fetchProfile();
        fetchMostStreamedArtists();
        fetchMostStreamedSongs();
        fetchRecentlyListened();

        function LoggedIn() {

            const token = localStorage.getItem('access_token');

            if (token) {

                if (!isLoggedin) {

                    Toastify({

                        className: "Toast",
                        text: "Successfully Logged in!",
                        duration: 3000,
                        newWindow: false,
                        gravity: "bottom",
                        position: "center",

                    }).showToast();
                }

                setLoggedin(true);
                localStorage.setItem("isloggedin", 'true');

            }
            else {
                localStorage.setItem("isloggedin", "false");
                setLoggedin(false);
            }

        }

    }, [access_token])  // run fetchProfile if access_token changes.

    useEffect(() => {

        async function fetchCurrentSong() {

            const response = await fetch('/me/player/currently-playing?cb=${Date.now()}', {

                method: 'GET',
                headers: { Authorization: `Bearer ${access_token}` },
            });


            if (response.status === 204 || response.status > 400) {
                console.log("Nothing playing, or an error occured. Please try again later.");
                return;
            }

            const currentSong = await response.json();
            setCurrentSong(currentSong);
            console.log(currentSong);
        }

        fetchCurrentSong();

        const intervalId = setInterval(() => {

            fetchCurrentSong();   // run every 30 seconds
        }, 30000);

        return () => clearInterval(intervalId);

    }, [access_token]);

    return (

        <div className="Main">

            {isLoggedin ?
                <div className="login-warning">
                </div>
                :
                <div className="login-warning">
                    <span> You are currently not logged in. Showing mock data for display purposes only.</span>
                </div>
            }

            <div className="top-component">
                {isLoading ?

                    <div className="profile-skeleton">

                        <div className="profile-left">
                            <Skeleton height={100} mb={6} />
                            <Skeleton height={50} color="teal" />

                        </div>
                        <div className="profile-right">
                            <Skeleton height={150} circle />
                        </div>

                    </div>

                    : <Profile ProfileData={profileData} />

                }

                {isLoading ?

                    <div className="current-song-skeleton">

                        <Skeleton height={250} />

                    </div>
                    : <CurrentSong CurrentSong={currentSong} />
                }

                {isLoading ?
                    <div className="top-songs-skeleton">
                        <Skeleton height={200} color='green.7' />
                    </div>
                    : <TopSongs MostStreamedSongs={mostStreamedSongs} />
                }

            </div>

            <div className="dashboard-container">

                {isLoading ?
                    <div className="monthly-activity-skeleton">
                        <Skeleton height={200} />

                    </div> :
                    <div className="dashboard-component">
                        <div className="component0">
                            <MonthlyActivity />
                        </div>
                    </div>
                }

                <div className="Dashboard">

                    {isLoading ?
                        <div className="genres-skeleton">
                            <Skeleton height={200} />
                        </div>
                        :

                        <div className="dashboard-component">
                            <div className="component1">
                                <TopGenres />
                            </div>
                        </div>
                    }

                    {isLoading ?
                        <div className="artists-skeleton">
                            <Skeleton height={200} />
                        </div>
                        :
                        <div className="dashboard-component">
                            <div className="component2">
                                {isLoggedin ? <Artists MostStreamedArtists={mostStreamed_Artists} /> : <div> <Skeleton /> </div>}
                            </div>
                        </div>
                    }

                    {isLoading ?

                        <div className="recently-listened-skeleton">
                            <Skeleton height={200} />
                        </div>
                        :
                        <div className="dashboard-component">
                            <div className="component3">
                                <RecentlyListened isLoggedin={isLoggedin} RecentlyListenedData={RecentlyListened_data} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Main;
