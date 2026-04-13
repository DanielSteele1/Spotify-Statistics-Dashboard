import { RadarChart } from '@mantine/charts';

function TopGenres() {

    const data = [

        {
            genre: 'Pop',
            streams: '8',
        },

        {
            genre: 'Rock',
            streams: '10',
        },

        {
            genre: 'Rap',
            streams: '12',
        },

        {
            genre: 'EDM',
            streams: '13',
        },

        {
            genre: 'Jazz',
            streams: '8',
        },

        {
            genre: 'Lo-Fi',
            streams: '9',
        },

        {
            genre: 'Classical',
            streams: '2',
        },
    ]

    return (
        <section className="Posts-widget">
            <span id="component-heading"> 📈 Top Genres </span>

           
        </section>
    )
}

export default TopGenres;