import { useState } from 'react';
import Song from './Song.tsx';

//import { randomId } from '@mantine/hooks';
import { Pagination, Skeleton } from '@mantine/core';

interface ImageObject {
    height: number;
    url: string;
    width: number;
}

interface ArtistsArray {
    name: string;
}

interface Album {
    images: ImageObject[];
}

interface Track {
    name: string;
    album: Album;
    artists: ArtistsArray[];
}

interface Item {
    track: Track;
    played_at: string;
}

interface RecentlyListenedProps {
    RecentlyListenedData: {
        items: Item[];
    } | null;

    isLoggedin: boolean;
}

function RecentlyListened({ RecentlyListenedData, isLoggedin }: RecentlyListenedProps) {

    const [activePage, setActivePage] = useState(1);

    const skeletonCount = 3;

    function formatDate(inputDate: string) {

        const date = new Date(inputDate);
        return date.toLocaleTimeString("en-GB", {

            minute: "2-digit",
            hour: "2-digit",
            day: "numeric",
            month: "long",
            weekday: "long",
            year: "numeric"
        });
    }

    //chunk the array

    function chunk<T>(array: T[], size: number): T[][] {
        return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
            array.slice(i * size, i * size + size)
        );
    }

    const pageSize = 5;
    const pages = chunk(RecentlyListenedData?.items ?? [], pageSize);
    const currentPageSongs = pages[activePage - 1] || [];

    return (

        <section className="recent-widget">
            <div className="component-top">
                <span id="component-heading"> 🎧 Listening History </span>

                <div className="history-count">
                    Showing {RecentlyListenedData?.items?.length ?? 0} recent tracks.
                </div>
            </div>

            <div className="recent-grid">
                {RecentlyListenedData?.items
                    ? currentPageSongs.map((item, key) => (
                        <Song
                            key={key}
                            played_at={formatDate(item.played_at)}
                            name={item.track.name}
                            image={item.track.album.images[0]?.url}
                            artists={item.track.artists[0].name}
                            isLoggedIn={isLoggedin}
                        />
                    ))
                    :
                    Array.from({ length: skeletonCount }).map((_, index) => (
                        <div key={index} className="recently-listened-skeleton">
                            <Skeleton id="skeleton-song" animate={false} width="5%" height={50} mr={20} />
                            <Skeleton id="skeleton-song" animate={false} width="100%" height={50} />
                        </div>
                    ))}
            </div>


            <div className="pagination">
                <Pagination
                    total={pages.length || 1}
                    value={activePage}
                    onChange={setActivePage}
                    color="green.7"
                    size="md"
                    radius="sm"
                    withEdges
                />
            </div>

        </section >
    )
}

export default RecentlyListened;