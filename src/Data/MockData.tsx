
export const Mock_Data = {
    ProfileData: {
        display_name: "Guest",
        images: [{ url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Destiny" }],
        followers: { total: 450 },
        external_urls: { spotify: "https://spotify.com" },
        product: "Premium"
    },

    topArtists: {
        href: "https://api.spotify.com/v1/me/top/artists",
        items: [
            {
                name: "The Midnight",
                genres: "Synthwave",
                images: [
                    { url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jack", height: 300, width: 300 }
                ]
            },
            {
                name: "MF DOOM",
                genres: "Psychedelic Pop",
                images: [
                    { url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel", height: 300, width: 300 }
                ]
            },
            {
                name: "Kendrick Lamar",
                genres: "House",
                images: [
                    { url: "https://api.dicebear.com/7.x/avataaars/svg?seed=hal", height: 300, width: 300 }
                ]
            },
            {
                name: "Arctic Monkeys",
                genres: "Indie Rock",
                images: [
                    { url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dtinyijij", height: 300, width: 300 }
                ]
            },
            {
                name: "Daft Punk",
                genres: "Electronic",
                images: [
                    { url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Blake", height: 300, width: 300 }
                ]
            },
            {
                name: "Laufey",
                genres: "Electronic",
                images: [
                    { url: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dan", height: 300, width: 300 }
                ]
            }
        ]
    },

    mostStreamedSongs: {
        href: "http://googleusercontent.com/spotify.com/9",
        items: [
            {
                name: "All Caps",
                album: {
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1619983081563-430f63602796", height: 300, width: 300
                        }
                    ]
                },
                artists: [
                    { href: "#", id: 101, name: "MF DOOM" }
                ],
                external_urls: { spotify: "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term0" }
            },
            {
                name: "Do Ya Like X Resonance",
                album: {
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f", height: 300, width: 300
                        }
                    ]
                },
                artists: [
                    { href: "#", id: 101, name: "noturgf" }
                ],
                external_urls: { spotify: "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term0" }
            }, {
                name: "Aint no rest for the Wicked",
                album: {
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa", height: 300, width: 300
                        }
                    ]
                },
                artists: [
                    { href: "#", id: 101, name: "Cage the Elephant" }
                ],
                external_urls: { spotify: "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term0" }
            }, {
                name: "Clockwork",
                album: {
                    images: [
                        {
                            url: "https://images.unsplash.com/photo-1526394931762-90052e97b376", height: 300, width: 300
                        }
                    ]
                },
                artists: [
                    { href: "#", id: 101, name: "Laufey" }
                ],
                external_urls: { spotify: "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term0" }
            },
            {
                name: "Levitating",
                album: {
                    images: [
                        { url: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&h=300&fit=crop", height: 300, width: 300 }
                    ]
                },
                artists: [
                    { href: "#", id: 102, name: "Dua Lipa" }
                ],
                external_urls: { spotify: "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term1" }
            },
            {
                name: "Heat Waves",
                album: {
                    images: [
                        { url: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?w=300&h=300&fit=crop", height: 300, width: 300 }
                    ]
                },
                artists: [
                    { href: "#", id: 103, name: "Glass Animals" }
                ],
                external_urls: { spotify: "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term2" }
            },
            {
                name: "Stay",
                album: {
                    images: [
                        { url: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=300&fit=crop", height: 300, width: 300 }
                    ]
                },
                artists: [
                    { href: "#", id: 104, name: "The Kid LAROI" }
                ],
                external_urls: { spotify: "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term3" }
            },
            {
                name: "Save Your Tears",
                album: {
                    images: [
                        { url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop", height: 300, width: 300 }
                    ]
                },
                artists: [
                    { href: "#", id: 105, name: "The Weeknd" }
                ],
                external_urls: { spotify: "https://api.spotify.com/v1/me/top/artists?limit=5&time_range=medium_term4" }
            }
        ]
    },

    RecentlyListened: {
        "items": [
            {
                "track": {
                    "name": "Midnight City",
                    "album": {
                        "images": [
                            { "height": 640, "url": "https://picsum.photos/id/10/640/640", "width": 640 },
                            { "height": 300, "url": "https://picsum.photos/id/10/300/300", "width": 300 }
                        ]
                    },
                    "artists": [{ "name": "M83" }]
                },
                "played_at": "2026-04-20T14:30:00Z"
            },
            {
                "track": {
                    "name": "Levitating",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/20/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Dua Lipa" }]
                },
                "played_at": "2026-04-20T14:35:00Z"
            },
            {
                "track": {
                    "name": "Blinding Lights",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/30/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "The Weeknd" }]
                },
                "played_at": "2026-04-20T14:40:00Z"
            },
            {
                "track": {
                    "name": "Pacific Coast Highway",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/40/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Kavinsky" }, { "name": "Lovefoxxx" }]
                },
                "played_at": "2026-04-20T14:45:00Z"
            },
            {
                "track": {
                    "name": "Solar Power",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/50/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Lorde" }]
                },
                "played_at": "2026-04-20T14:50:00Z"
            },
            {
                "track": {
                    "name": "Heat Waves",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/60/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Glass Animals" }]
                },
                "played_at": "2026-04-20T14:55:00Z"
            },
            {
                "track": {
                    "name": "Stay",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/70/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "The Kid LAROI" }, { "name": "Justin Bieber" }]
                },
                "played_at": "2026-04-20T15:00:00Z"
            },
            {
                "track": {
                    "name": "Bad Guy",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/80/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Billie Eilish" }]
                },
                "played_at": "2026-04-20T15:05:00Z"
            },
            {
                "track": {
                    "name": "Tame Impala Mix",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/90/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Tame Impala" }]
                },
                "played_at": "2026-04-20T15:10:00Z"
            },
            {
                "track": {
                    "name": "Drivers License",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/100/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Olivia Rodrigo" }]
                },
                "played_at": "2026-04-20T15:15:00Z"
            },
            {
                "track": {
                    "name": "Starboy",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/110/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "The Weeknd" }, { "name": "Daft Punk" }]
                },
                "played_at": "2026-04-20T15:20:00Z"
            },
            {
                "track": {
                    "name": "Good 4 U",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/120/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Olivia Rodrigo" }]
                },
                "played_at": "2026-04-20T15:25:00Z"
            },
            {
                "track": {
                    "name": "Peaches",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/130/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Justin Bieber" }, { "name": "Daniel Caesar" }]
                },
                "played_at": "2026-04-20T15:30:00Z"
            },
            {
                "track": {
                    "name": "Montero",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/140/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Lil Nas X" }]
                },
                "played_at": "2026-04-20T15:35:00Z"
            },
            {
                "track": {
                    "name": "Save Your Tears",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/150/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "The Weeknd" }]
                },
                "played_at": "2026-04-20T15:40:00Z"
            },
            {
                "track": {
                    "name": "Kiss Me More",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/160/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Doja Cat" }, { "name": "SZA" }]
                },
                "played_at": "2026-04-20T15:45:00Z"
            },
            {
                "track": {
                    "name": "Leave The Door Open",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/170/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Silk Sonic" }]
                },
                "played_at": "2026-04-20T15:50:00Z"
            },
            {
                "track": {
                    "name": "Deja Vu",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/180/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Olivia Rodrigo" }]
                },
                "played_at": "2026-04-20T15:53:00Z"
            },
            {
                "track": {
                    "name": "Butter",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/190/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "BTS" }]
                },
                "played_at": "2026-04-20T15:55:00Z"
            },
            {
                "track": {
                    "name": "Happier Than Ever",
                    "album": {
                        "images": [{ "height": 640, "url": "https://picsum.photos/id/200/640/640", "width": 640 }]
                    },
                    "artists": [{ "name": "Billie Eilish" }]
                },
                "played_at": "2026-04-20T15:58:00Z"
            }
        ]
    },

    "topSongsAll": {
        "href": "http://googleusercontent.com/spotify.com/9",
        "items": [
            { "name": "All Caps", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1619983081563-430f63602796", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 101, "name": "MF DOOM" }], "external_urls": { "spotify": "http://spotify.com/0" } },
            { "name": "Do Ya Like X Resonance", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 102, "name": "noturgf" }], "external_urls": { "spotify": "http://spotify.com/1" } },
            { "name": "Aint no rest for the Wicked", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 103, "name": "Cage the Elephant" }], "external_urls": { "spotify": "http://spotify.com/2" } },
            { "name": "Clockwork", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1526394931762-90052e97b376", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 104, "name": "Laufey" }], "external_urls": { "spotify": "http://spotify.com/3" } },
            { "name": "Levitating", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 105, "name": "Dua Lipa" }], "external_urls": { "spotify": "http://spotify.com/4" } },
            { "name": "Heat Waves", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1550684848-fac1c5b4e853", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 106, "name": "Glass Animals" }], "external_urls": { "spotify": "http://spotify.com/5" } },
            { "name": "Stay", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 107, "name": "The Kid LAROI" }], "external_urls": { "spotify": "http://spotify.com/6" } },
            { "name": "Save Your Tears", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 108, "name": "The Weeknd" }], "external_urls": { "spotify": "http://spotify.com/7" } },
            { "name": "Rhinestone Cowboy", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 109, "name": "Madvillain" }], "external_urls": { "spotify": "http://spotify.com/8" } },
            { "name": "Coffee", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 110, "name": "beabadoobee" }], "external_urls": { "spotify": "http://spotify.com/9" } },
            { "name": "Starboy", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 111, "name": "The Weeknd" }], "external_urls": { "spotify": "http://spotify.com/10" } },
            { "name": "Midnight City", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 112, "name": "M83" }], "external_urls": { "spotify": "http://spotify.com/11" } },
            { "name": "Sweater Weather", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1523381235312-dd59b132d60c", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 113, "name": "The Neighbourhood" }], "external_urls": { "spotify": "http://spotify.com/12" } },
            { "name": "Breezeblocks", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 114, "name": "alt-J" }], "external_urls": { "spotify": "http://spotify.com/13" } },
            { "name": "Greek Tragedy", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 115, "name": "The Wombats" }], "external_urls": { "spotify": "http://spotify.com/14" } },
            { "name": "The Less I Know The Better", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1459749411177-042180ce673c", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 116, "name": "Tame Impala" }], "external_urls": { "spotify": "http://spotify.com/15" } },
            { "name": "Redbone", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1501612780327-451e5d44a0f3", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 117, "name": "Childish Gambino" }], "external_urls": { "spotify": "http://spotify.com/16" } },
            { "name": "Passionfruit", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 118, "name": "Drake" }], "external_urls": { "spotify": "http://spotify.com/17" } },
            { "name": "Location", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 119, "name": "Khalid" }], "external_urls": { "spotify": "http://spotify.com/18" } },
            { "name": "Bad Guy", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 120, "name": "Billie Eilish" }], "external_urls": { "spotify": "http://spotify.com/19" } },
            { "name": "Lucid Dreams", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 121, "name": "Juice WRLD" }], "external_urls": { "spotify": "http://spotify.com/20" } },
            { "name": "Circles", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 122, "name": "Post Malone" }], "external_urls": { "spotify": "http://spotify.com/21" } },
            { "name": "Blinding Lights", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1493225255756-d9584f8606e9", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 123, "name": "The Weeknd" }], "external_urls": { "spotify": "http://spotify.com/22" } },
            { "name": "Sunflower", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 124, "name": "Swae Lee" }], "external_urls": { "spotify": "http://spotify.com/23" } },
            { "name": "Mood", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1459749411177-042180ce673c", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 125, "name": "24kGoldn" }], "external_urls": { "spotify": "http://spotify.com/24" } },
            { "name": "Peaches", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 126, "name": "Justin Bieber" }], "external_urls": { "spotify": "http://spotify.com/25" } },
            { "name": "Montero", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 127, "name": "Lil Nas X" }], "external_urls": { "spotify": "http://spotify.com/26" } },
            { "name": "Drivers License", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 128, "name": "Olivia Rodrigo" }], "external_urls": { "spotify": "http://spotify.com/27" } },
            { "name": "Good 4 U", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 129, "name": "Olivia Rodrigo" }], "external_urls": { "spotify": "http://spotify.com/28" } },
            { "name": "Kiss Me More", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 130, "name": "Doja Cat" }], "external_urls": { "spotify": "http://spotify.com/29" } },
            { "name": "Telepatía", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1501386761578-eac5c94b800a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 131, "name": "Kali Uchis" }], "external_urls": { "spotify": "http://spotify.com/30" } },
            { "name": "Without You", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1526218626217-dc65a29bb444", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 132, "name": "The Kid LAROI" }], "external_urls": { "spotify": "http://spotify.com/31" } },
            { "name": "Deja Vu", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 133, "name": "Olivia Rodrigo" }], "external_urls": { "spotify": "http://spotify.com/32" } },
            { "name": "Up", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 134, "name": "Cardi B" }], "external_urls": { "spotify": "http://spotify.com/33" } },
            { "name": "Rapstar", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 135, "name": "Polo G" }], "external_urls": { "spotify": "http://spotify.com/34" } },
            { "name": "Astronaut In The Ocean", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 136, "name": "Masked Wolf" }], "external_urls": { "spotify": "http://spotify.com/35" } },
            { "name": "Leave The Door Open", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 137, "name": "Silk Sonic" }], "external_urls": { "spotify": "http://spotify.com/36" } },
            { "name": "Better Together", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 138, "name": "Jack Johnson" }], "external_urls": { "spotify": "http://spotify.com/37" } },
            { "name": "Thinking Out Loud", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 139, "name": "Ed Sheeran" }], "external_urls": { "spotify": "http://spotify.com/38" } },
            { "name": "Perfect", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 140, "name": "Ed Sheeran" }], "external_urls": { "spotify": "http://spotify.com/39" } },
            { "name": "Say You Won't Let Go", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 141, "name": "James Arthur" }], "external_urls": { "spotify": "http://spotify.com/40" } },
            { "name": "All Of Me", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 142, "name": "John Legend" }], "external_urls": { "spotify": "http://spotify.com/41" } },
            { "name": "Someone Like You", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 143, "name": "Adele" }], "external_urls": { "spotify": "http://spotify.com/42" } },
            { "name": "Rolling In The Deep", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 144, "name": "Adele" }], "external_urls": { "spotify": "http://spotify.com/43" } },
            { "name": "Hello", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 145, "name": "Adele" }], "external_urls": { "spotify": "http://spotify.com/44" } },
            { "name": "Shallow", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 146, "name": "Lady Gaga" }], "external_urls": { "spotify": "http://spotify.com/45" } },
            { "name": "Old Town Road", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 147, "name": "Lil Nas X" }], "external_urls": { "spotify": "http://spotify.com/46" } },
            { "name": "Despacito", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 148, "name": "Luis Fonsi" }], "external_urls": { "spotify": "http://spotify.com/47" } },
            { "name": "Shape Of You", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1516280440614-37939bbacd81", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 149, "name": "Ed Sheeran" }], "external_urls": { "spotify": "http://spotify.com/48" } },
            { "name": "Havana", "album": { "images": [{ "url": "https://images.unsplash.com/photo-1514525253344-f81bad3b7c2a", "height": 300, "width": 300 }] }, "artists": [{ "href": "#", "id": 150, "name": "Camila Cabello" }], "external_urls": { "spotify": "http://spotify.com/49" } }
        ]
    }

    // CurrentSong: {

    //     href: "",
    //     items: [
    //     images: imageArray[];
    //     name: string;
    //     artists: artistsArray[];
    //     is_playing: boolean;
    //     device: deviceArray[];
    //     ]

    // }
}