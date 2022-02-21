import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo } from '../types/Photo';
import { PhotoItem } from '../components/PhotoItem';

export const Photos = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false); 
    const [photo, setPhoto] = useState<Photo>();

    useEffect(() => {
        if(params.id) {
            loadPhoto(params.id);
        }
    }, []);

    const loadPhoto = async (id: string) => {
        setLoading(true);
        const photo = await api.getPhoto(id);
        setPhoto(photo);
        setLoading(false);
    }    

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            {loading && "Carregando..."}
            {photo &&
                <>
                    <button onClick={handleBackButton}>Voltar</button>
                    <p>{photo.title}</p>
                    <img src={photo.url} alt={photo.title} />
                </>
            }
        </div>
    );
}
