
import './Artist.css';

interface ArtistProps {

    key: number;
    index: number;
    image: string;
    name: string;
}

function Artist({ index, image, name }: ArtistProps) {

    return (
        <>
            <div className="artist-score">
                {index}
            </div>

            <div className="artist-image">
                {image && <img src={image} alt="Artist" />}
            </div>

            <div className="artist-info">

                <div className="artist-name">
                    {name}
                </div>
            </div>
        </>
    )
}
export default Artist;