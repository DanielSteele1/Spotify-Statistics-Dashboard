
import { create } from 'zustand';

// Zustand UseStore - Can be used to store props and re-import them anywhere in
// the app

const useStore = create((set) => ({

    //Profile data
    profileData: null,
    setProfileData: (data: any) => set({ profileData: data }),

    // loading state, used to add skeletons when loading app.
    isLoading: false,
    setLoading: (data: boolean) => set({ isLoading: data }),

    //used to check if user is loggedIn or not, will check once a user has logged in with spotify.
    isLoggedin: false,
    setLoggedin: (data: boolean) => set({ isLoggedin: data }),

    isMockData: localStorage.getItem('isMockData') === 'true',

    topSongsAll: null,
    setTopSongsAll: (data: any) => set({ topSongsAll: data }),

    mostStreamedSongs: null,
    setMostStreamedSongs: (data: any) => set({ mostStreamedSongs: data }),

    mostStreamedArtists: null,
    setMostStreamedArtists: (data: any) => set({mostStreamedArtists: data }),

    RecentlyListened: null,
    setRecentlyListened: (data: any) => set({RecentlyListened: data}),

    //mock data mode (the actual app state since spotify limited thier API)

    // whenever we're setting setMockData in our app, val becomes true/false , 
    // and then we're saving that value into localStorage. this ensures that no matter what happens in the app, 
    // setMockData will always be correct. 
    setMockData: (val: boolean) => { localStorage.setItem('isMockData', String(val)); 
    set({ isMockData: val });
  },
}));

export default useStore;