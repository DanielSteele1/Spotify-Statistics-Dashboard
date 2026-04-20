

import useStore from './ZustandStore.tsx';
import ArtistSkeleton from './ArtistSkeleton.tsx';
import Artist from './Artist.tsx';
import './Artist.css';
import { RiArrowRightSLine } from 'react-icons/ri';

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

    const isLoggedin = useStore((state: any) => state.isLoggedin);

    const artistItems = MostStreamedArtists?.items || [];

    const isMockData = useStore((state: any) => state.isMockData);

    return (
        <section className="top-artists-widget">

            <div className="headers">
                <span id="component-heading"> 🧑‍🎨 Top Artists this month </span>
                <span id="component-subheading"> <RiArrowRightSLine /> </span>
            </div>

            {isLoggedin || isMockData ?
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
                :
                <div className="artists">
                    <div className="artist">
                        <ArtistSkeleton />
                    </div>
                </div>
            }
        </section>
    );
}

export default Artists;