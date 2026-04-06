import { BarChart } from '@mantine/charts';

interface MostStreamedArtistsProps {

    MostStreamedArtists: {

        href?: string;
        items?: ItemsArray[];

    } | null;
}

interface ItemsArray {

    genres: string;
    images: imagesArray[];
}

interface imagesArray {
    height: number;
    width: number;
    url: string;
}

function Artists({ MostStreamedArtists }: MostStreamedArtistsProps) {


    const data = [
        { artist: '', Songs: 5 },
        { artist: 'Artist 2', Songs: 10 },
        { artist: 'Artist 3', Songs: 6 },
        { artist: 'Artist 4', Songs: 3 },
        { artist: 'Artist 4', Songs: 3 },
    ];

    // Only render image if data exists
    const artistImage = MostStreamedArtists?.items?.[0]?.images?.[0]?.url;

    return (
        <section className="top-artists-widget">
            <span id="component-heading"> 🧑‍🎨 Top five Artists </span>

            {artistImage && <img src={artistImage} alt="Artist" />}

            <BarChart
                h={200}
                data={data}
                dataKey="artist"
                orientation="vertical"
                yAxisProps={{ width: 40 }}
                barProps={{ radius: 4 }}
                series={[{ name: 'Songs', color: 'green.7' }]}
            />
        </section>
    );
}

export default Artists;