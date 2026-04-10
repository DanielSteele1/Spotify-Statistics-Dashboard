
import { PersonIcon } from '@radix-ui/react-icons';
import './Artist.css';

interface ArtistProps {
    index: number;
    image?: string;
    name?: string;
}

function Artist({ index, image, name }: ArtistProps) {

    // const isLoading = useStore((state: any) => state.isLoading);
    //  const setLoading = useStore((state: any) => state.setLoading);

    return (
        <div className="artist-info">
            <div className="artist-score">
                # {index + 1}
            </div>

            <div className="artist-image">
                {image ? <img src={image} alt="Artist" /> : <PersonIcon /> }
            </div>

            <div className="artist-info">
                <div className="artist-name">
                    {name}
                </div>
            </div>
        </div>
    )
}
export default Artist;