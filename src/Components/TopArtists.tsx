

import Artist from './Artist.tsx';
import './Artist.css';
interface MostStreamedArtistsProps {

    MostStreamedArtists: {

        href?: string;
        items?: ItemsArray[];

    } | null;
}

interface ItemsArray {

    genres: string;
    images: imagesArray[];
    name: string;
}

interface imagesArray {
    height: number;
    width: number;
    url: string;
}

function Artists({ MostStreamedArtists }: MostStreamedArtistsProps) {

    const artistItems = MostStreamedArtists?.items || [];

    return (
        <section className="top-artists-widget">
            <span id="component-heading"> 🧑‍🎨 Top five Artists </span>
            <div className="artists">
                    {artistItems.map((item, index: number) => (
                            <div className="artist">
                                <Artist
                                    key={index}
                                    index={index}
                                    image={item.images?.[0]?.url}
                                    name={item.name}
                                />
                            </div>
                        ))
                    }
            </div>
        </section>
    );
}

export default Artists;