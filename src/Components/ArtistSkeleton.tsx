
import { BsPersonBadgeFill } from 'react-icons/bs';
import './Skeleton.css';

const MockArtistArray = [

    { index: 1, image: <BsPersonBadgeFill />, name: 'Kanye West' },
    { index: 2, image: <BsPersonBadgeFill />, name: 'C418' },
    { index: 3, image: <BsPersonBadgeFill />, name: 'Laufey' },
    { index: 4, image: <BsPersonBadgeFill />, name: 'Drake' },
    { index: 5, image: <BsPersonBadgeFill />, name: 'Kendrick Lamar' },
]

function ArtistSkeleton() {

    return (
        <>
            {
                MockArtistArray.map((artist: any) => (
                    <div className="artist-info-skeleton" key={artist.key}>

                        <div className="artist-score">
                            # {artist.index}
                        </div>

                        <div className="artist-image-skeleton">
                            {artist.image}
                        </div>

                        <div className="artist-info">
                            <div className="artist-name">
                                {artist.name}
                            </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}

export default ArtistSkeleton;