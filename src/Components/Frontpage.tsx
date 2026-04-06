import { Button } from '@mantine/core';
import './Frontpage.css';
import { PersonIcon } from '@radix-ui/react-icons';

const FrontPage = () => {

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
                        <span> Sign up now <PersonIcon style={{ fontSize: '20px', marginLeft: '10px' }} /> </span>

                    </Button>

                </a>
            </div>
        </section>
    );
};

export default FrontPage;