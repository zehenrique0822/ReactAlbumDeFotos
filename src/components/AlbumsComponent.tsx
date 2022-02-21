import { Link } from 'react-router-dom';
//import './styles.css';

type Props = {
    id: number;
    title: string;
}

export const AlbumComponent = ({ id, title }: Props) => {
    return (
        <Link to={`/album/${id}`} className="album">
            <h1>{title}</h1><hr/>
        </Link>
    );
}