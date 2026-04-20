
import { type JSX } from "react";
import './TopSongsFull.css';

interface SongAllProps {

    key: number;
    rank: number;
    imageUrl: string;
    imageName: string;
    imageArtists: string;
}


// work out conditional rendering for each element.
function SongAll({ imageName, imageArtists, imageUrl, rank}: SongAllProps): JSX.Element {

    return (
        <section className="top-song">
                <span id="song-place">
                    #{rank}
                </span>

                {<span className="song-pic"> <img src={imageUrl} /> </span>}

                <span id="info-bar">
                    <span id="link-title-all">
                        {imageName}
                    </span>

                    <span id="artist-name">
                        {imageArtists}
                    </span>
                </span>
        </section>
    )

}

export default SongAll;