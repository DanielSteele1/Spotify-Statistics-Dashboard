
import { Button } from '@mantine/core';
import { FaChartArea, FaSpotify } from 'react-icons/fa6';

import { Alert } from '@mantine/core';
import { IoWarningSharp } from 'react-icons/io5';
import { PersonIcon } from '@radix-ui/react-icons';

import useStore from './ZustandStore.tsx';

interface loginProps {

    clientId: string;
    redirectUri: string;
}

function Login({ clientId, redirectUri }: loginProps) {

    const isMockData = useStore((state: any) => state.isMockData);
    const setMockData = useStore((state: any) => state.setMockData);
    
    async function Authentication() {
        // generate a random string of text

        const generateRandomString = (length: number) => {
            const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const values = crypto.getRandomValues(new Uint8Array(length));
            return values.reduce((acc, x) => acc + possible[x % possible.length], "");
        }

        // save into codeVerifier
        const codeVerifier = generateRandomString(64);

        const sha256 = async (plain: any) => {
            const encoder = new TextEncoder()
            const data = encoder.encode(plain)
            return window.crypto.subtle.digest('SHA-256', data)
        }

        const base64encode = (input: ArrayBuffer) => {
            return btoa(String.fromCharCode(...new Uint8Array(input)))
                .replace(/=/g, '')
                .replace(/\+/g, '-')
                .replace(/\//g, '_');
        }

        const hashed = await sha256(codeVerifier)
        // hash the codeVerifier and create a codeChallenge
        const codeChallenge = base64encode(hashed);

        // save to localStorage
        localStorage.setItem('code_verifier', codeVerifier);

        // get request to the authorization endpoint
        const scope = 'user-read-private user-read-email user-library-read user-read-recently-played user-top-read user-follow-read user-read-playback-position playlist-read-private user-read-currently-playing';
        const authUrl = new URL("https://accounts.spotify.com/authorize")

        const params = {
            response_type: 'code',
            client_id: clientId,
            scope,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge,
            redirect_uri: redirectUri,
        }

        authUrl.search = new URLSearchParams(params).toString();
        window.location.href = authUrl.toString();
    }


    function MockDataMode() {

        if (isMockData === false) {

            setMockData(true);
            localStorage.setItem('isMockData', 'true');

            window.location.href = ('/dashboard');
        }
        else {
            localStorage.setItem('isMockData', 'false');
            setMockData(false);
        }
    }

    const Icon: React.ReactNode = <IoWarningSharp />;

    return (
        <section className="Login">
            <div className="login-container">

                <div className="warning-container">
                    <Alert
                        className="warning"
                        variant='filled'
                        title="Warning"
                        icon={Icon}
                        radius={10}

                    >
                        Unfortunatly, due to spotify's new API restrictions, this app currently is disabled.
                        However, you can still view the dashboard with mock data implemented by clicking below.
                    </Alert>
                </div>

                <div className="login-backing">

                    <div className="signup-title">
                        <FaChartArea style={{ fontSize: '50px', color: '#1db948' }} />
                        AudioStats
                    </div>

                    <div className="login-desc">
                        Connect with spotify to see your stats. Once you click the button below,
                        you will be redirected to spotify in order to authorise AudioStats.
                    </div>

                    <div className="login-button-container">

                        <Button
                            className="signup-button"
                            color='green.7'
                            size='lg'
                            radius='lg'
                            onClick={Authentication}

                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                Connect with Spotify <FaSpotify style={{ fontSize: '25px' }} />
                            </span>
                        </Button>

                        <Button
                            className="signup-button"
                            color='green.7'
                            size='lg'
                            radius='lg'
                            onClick={MockDataMode}
                        >
                            <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                View Mock Profile <PersonIcon style={{ fontSize: '25px' }} />
                            </span>
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Login;