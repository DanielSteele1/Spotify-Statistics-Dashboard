import './CurrentSong.css'


interface artistsArray {

    name: string;
}

interface imageArray {
    height: string;
    width: string;
    url: string;
}

interface deviceArray {

    id: string;
    is_active: boolean;
    type: string;
    name: string;
}

interface items {

    images: imageArray[];
    name: string;
    artists: artistsArray[];

    is_playing: boolean; // if the currentsong is actually playing or not
    timestamp: number;
    progress_ms: number; //progress of song - stick in progressbar
    device: deviceArray[];
}

interface CurrentSongProps {

    CurrentSong: {
        item: items;

    } | null;
}

function CurrentSong({ CurrentSong }: CurrentSongProps) {

    const CurrentImage = CurrentSong?.item.images?.[0]?.url;
    const name = CurrentSong?.item.name;
    const timestamp = CurrentSong?.item.timestamp;

    const progress = CurrentSong?.item.progress_ms;
    const DeviceType = CurrentSong?.item.device[0].type;


    return (
        <section>
            <div className="current-song-container">
                <div className="current-song">
                    <img src={CurrentImage} className="song-img" />
                    <div className="currentsong-name"> {name} </div>
                    <div className="currentsong-progressbar">

                      {progress}
                      {timestamp}

                    </div>

                    <div className="device-type"> {DeviceType} </div>

                </div>
            </div>
        </section>
    )
}

export default CurrentSong;