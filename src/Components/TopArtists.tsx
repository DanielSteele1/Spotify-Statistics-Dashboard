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

            {artistImage && <img src={artistImage} alt="Artist" />}

            <BarChart
                h={200}
                data={TopArtists}
                dataKey="artist"
                orientation="vertical"
                yAxisProps={{ width: 40 }}
                barProps={{ radius: 4 }}
                series={[{ name: 'score', color: 'green.7' }]}
            />
        </section>
    );
}

export default Artists;