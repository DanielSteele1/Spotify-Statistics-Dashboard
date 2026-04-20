import Profile from './Profile.tsx';
import TopGenres from './TopGenres.tsx';
import Artists from './TopArtists.tsx';
import TopSongs from './TopSongs.tsx';
import MonthlyActivity from './MonthlyActivity.tsx';
import RecentlyListenedComponent from './RecentlyListened.tsx';

import { useEffect } from 'react';
import Toastify from 'toastify-js';
import { Skeleton } from '@mantine/core';

import useStore from './ZustandStore.tsx';
import './Skeleton.css';

// mock data to display if API is broken
import { Mock_Data } from '../Data/MockData.tsx';

function Main() {

    const isMockData = useStore((state: any) => state.isMockData);

    //fetch userData
    const access_token = localStorage.getItem('access_token');

    const profileData = useStore((state: any) => state.profileData);
    const setProfileData = useStore((state: any) => state.setProfileData);

    const isLoading = useStore((state: any) => state.isLoading);
    const setLoading = useStore((state: any) => state.setLoading);

    const isLoggedin = useStore((state: any) => state.isLoggedin);
    const setLoggedin = useStore((state: any) => state.setLoggedin);

    const setTopSongsAll = useStore((state: any) => state.setTopSongsAll);
    const setMostStreamedArtists = useStore((state: any) => state.setMostStreamedArtists);
    const setMostStreamedSongs = useStore((state: any) => state.setMostStreamedSongs);
    const setRecentlyListened = useStore((state: any) => state.setRecentlyListened);

    const mostStreamedArtists = useStore((state: any) => state.mostStreamedArtists);
    const mostStreamedSongs = useStore((state: any) => state.mostStreamedSongs);
    const RecentlyListened = useStore((state: any) => state.RecentlyListened);


    useEffect(() => {

        setLoading(true);
        const timer = setTimeout(() => setLoading(false), 1000);
        return () => clearTimeout(timer);

    }, []);

    useEffect(() => {

        if (isMockData === true) {

            console.log("Using Mock Data");
            setProfileData(Mock_Data.ProfileData);

            Toastify({

                className: "Toast",
                text: "Logged in via Mock Profile",
                duration: 3000,
                newWindow: true,
                gravity: "bottom",
                position: "right",

            }).showToast();
        }

        else {

            async function fetchMostStreamedArtists() {

                const response = await fetch("https://api.spotify.com/v1/me/top/artists?limit=6&time_range=medium_term", {

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

            async function fetchTopSongsAll() {

                const response = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=50&time_range=long_term", {

                    method: "GET",
                    headers: { Authorization: `bearer ${access_token}` },
                })

                const TopSongsAll_data = await response.json();
                setTopSongsAll(TopSongsAll_data);
                console.log(TopSongsAll_data);
            }

            async function fetchRecentlyListened() {

                const response = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=20", {

                    method: "GET",
                    headers: { Authorization: `Bearer ${access_token}` },
                });

                const RecentlyListened = await response.json();
                setRecentlyListened(RecentlyListened);
                console.log(RecentlyListened);
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
            fetchTopSongsAll();

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
                            position: "right",

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
        }

    }, [access_token])  // run fetchProfile if access_token changes.


    return (

        <div className="Main">


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

                {/* <div className="Dashboard"> */}

                {isLoading ?
                    <div className="artists-skeleton">
                        <Skeleton height={200} />
                    </div>
                    :
                    <div className="dashboard-component">
                        <div className="component2">
                            <Artists MostStreamedArtists={mostStreamedArtists} />
                        </div>
                    </div>
                }

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

                    <div className="recently-listened-skeleton">
                        <Skeleton height={200} />
                    </div>
                    :
                    <div className="dashboard-component">
                        <div className="component3">
                            <RecentlyListenedComponent RecentlyListened={RecentlyListened} />
                        </div>
                    </div>
                }
            </div>
        </div>
        // </div>
    )
}

export default Main;
