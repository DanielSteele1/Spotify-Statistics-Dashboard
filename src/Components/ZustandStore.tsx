
import { create } from 'zustand';

// Zustand UseStore - Can be used to store props and re-import them anywhere in
// the app

const useStore = create((set) => ({

    profileData: null,
    setProfileData: (data: any) => set({ profileData: data }),

    // loading state, used to add skeletons when loading app.
    isLoading: false,
    setLoading: (data: boolean) => set({ isLoading: data }),

    //used to check if user is loggedIn or not, will check once a user has logged in with spotify.
    isLoggedin: true,
    setLoggedin: (data: boolean) => set({ isLoggedin: data }),
}));

export default useStore;