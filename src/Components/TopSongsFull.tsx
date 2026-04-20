import { useState, type JSX } from "react";
import Song from "./Song";
import "./TopSongsFull.css";
import useStore from "./ZustandStore";
import SongAll from "./SongAll";
import { Link } from "react-router-dom";
import { RiArrowLeftSLine } from "react-icons/ri";

interface SpotifyImage {
    height: number;
    width: number;
    url: string;
}

interface Artists {
    href: string;
    id: number;
    name: string;
}

interface Song {
    name: string;
    album: { images: SpotifyImage[] };
    external_urls: { spotify: string };
    artists: Artists[];
}

function TopSongsFull(): JSX.Element {

    const topSongsAll = useStore((state: any) => state.topSongsAll);
    const [SearchTerm, setSearchTerm] = useState("");

    const filteredSongs = topSongsAll?.items?.filter((song: Song) =>
        song.name.toLowerCase().includes(SearchTerm.toLowerCase())
    ) || [];

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    return (
        <section className="Top-songs-full">
            <div className="component">

                <div className="component-heading">

                    <Link to="/dashboard">
                        <span id="component-subheading">
                            <RiArrowLeftSLine />
                        </span>
                    </Link>

                    <span>
                        📈 Your Top Songs
                    </span>
                </div>


                <input
                    className="search-bar"
                    placeholder="Search songs..."
                    value={SearchTerm}
                    onChange={handleSearch}
                />

                <div className="songs-filter">
                    {filteredSongs.map((item: Song, index: number) => {
                        const imageUrl = item.album.images[0]?.url;
                        const imageName = item.name;
                        const imageArtists = item.artists[0]?.name;

                        return (
                            <SongAll
                                key={index}
                                imageName={imageName}
                                imageUrl={imageUrl}
                                imageArtists={imageArtists}
                                rank={index + 1}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default TopSongsFull;