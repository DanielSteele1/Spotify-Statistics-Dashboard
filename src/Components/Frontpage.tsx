import { Button } from '@mantine/core';
import './Frontpage.css';
import { FaSpotify } from 'react-icons/fa6';

function FrontPage() {

    return (
        <section className="frontpage-container">
            <div className='frontpage'>

                <div className="frontpage-title-container">
                    <span className="frontpage-title">
                        AudioStats
                    </span>
                    <span className="frontpage-sub-heading">
                        Get stats on your listening habits
                    </span>
                </div>

                <a href="/signup" className="sign-up-button">
                    <Button
                        className="frontpage-sign-up"
                        color='green.7'
                        size='lg'
                        radius='lg'
                    >
                        <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            Connect with Spotify <FaSpotify style={{ fontSize: '25px' }} />
                        </span>
                    </Button>
                </a>
            </div>
        </section>
    );
};

export default FrontPage;