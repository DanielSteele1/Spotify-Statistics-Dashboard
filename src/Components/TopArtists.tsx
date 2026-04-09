
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

    const TopArtists = MostStreamedArtists?.items?.map((items, index) => {

        return {
            artist: items?.name,
            score: 5 - index,
        }
    }) || [];

    // const TopArtists = MostStreamedArtists?.items?.[0]?.images?.[0]?.url;

    // Only render image if data exists
    const artistImage = MostStreamedArtists?.items?.[0]?.images?.[0]?.url;

    return (
        <section className="top-artists-widget">
            <span id="component-heading"> 🧑‍🎨 Top five Artists </span>

            <div>

                <div className="artist-score">
                    {TopArtists[0]?.score}
                </div>

                <div className="artist-image">
                    {artistImage && <img src={artistImage} alt="Artist" />}
                </div>

                <div className="artist-info">

                    <div className="artist-name">
                        {TopArtists[0]?.artist}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Artists;