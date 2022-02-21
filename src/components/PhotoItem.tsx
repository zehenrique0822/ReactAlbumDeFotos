import { Link } from 'react-router-dom';
//import './styles.css';
import { Photo } from '../types/Photo';

type Props = {
    data: Photo
}

export const PhotoItem = ({ data }: Props) => {
    return (
        <Link to={`/photo/${data.id}`} className="photo">
            <img src={data.thumbnailUrl} alt={data.title} />
        </Link>
    );
}