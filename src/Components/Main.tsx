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

import './Skeleton.css'

function Main() {

    //fetch userData
    const access_token = localStorage.getItem('access_token');

    const [profileData, setProfileData] = useState(null);
    const [mostStreamedSongs, setMostStreamedSongs] = useState(null);
    const [RecentlyListened_data, setRecentlyListened] = useState(null);
    const [mostStreamed_Artists, setMostStreamedArtists] = useState(null);
    const [currentSong, setCurrentSong] = useState(null);

    // loading state, used to add skeletons when loading app.
    const [isLoading, setLoading] = useState(true);
    //used to check if user is loggedIn or not, will check once a user has logged in with spotify.
    const [isLoggedin, setLoggedin] = useState(false);

    useEffect(() => {

        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);

    }, []);

    useEffect(() => {

        async function fetchMostStreamedArtists() {

            const response = await fetch("https://api.spotify/com/v1/me/top/artists?limit=5&time_range=short_term ", {

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

            if (isLoggedin === false) {

                setLoggedin(false);
                localStorage.setItem("isloggedin", "true");

                Toastify({

                    className: "Toast",
                    text: "Successfully Logged in!",
                    duration: 3000,
                    newWindow: false,
                    gravity: "bottom",
                    position: "center",

                }).showToast();
            }
            else {
                localStorage.setItem("isloggedin", "false");
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
                <div>

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
                                {isLoggedin ? <div> <Skeleton /> </div> : <Artists MostStreamedArtists={mostStreamed_Artists} />}
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
