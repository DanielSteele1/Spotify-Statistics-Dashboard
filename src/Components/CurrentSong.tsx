
interface CurrentSongProps {

    CurrentSong: {
        

    } | null;
}

function CurrentSong({ }: CurrentSongProps) {

    return (
        <section>
            <div className="current-song-container">
                  <div className="current-song">
                  </div>
            </div>
        </section>
    )
}

export default CurrentSong;