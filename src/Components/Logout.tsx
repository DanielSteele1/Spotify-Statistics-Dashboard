

import useStore from "./ZustandStore";
import { Button } from "@mantine/core";


function Logout() {

    const isLoggedin = useStore((state: any) => state.isLoggedin);
    const isMockData = useStore((state: any) => state.isMockData);

    const setMockData = useStore((state: any) => state.setLoggedin);
    const setLoggedin = useStore((state: any) => state.setMockData);

    function LogMeOut() {

        if (isLoggedin || isMockData === true) {

            localStorage.setItem(isLoggedin, 'false');
            setLoggedin(false);

            localStorage.setItem(isMockData, 'false');
            setMockData(false);

            window.location.href = '/';

        }

    }

    return (

        <Button
        color='green.7'
            onClick={LogMeOut}
        >
            <span> Logout </span>

        </Button>

    )
}

export default Logout;