import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { api } from '../api';
import { Photo } from '../types/Photo';
import { AlbumsType } from '../types/AlbumsType';
import { PhotoItem } from '../components/PhotoItem';

export const Album = () => {

    const params = useParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(false); 
    const [album, setAlbum] = useState<Photo[]>([]);
    const [albumInfo, setAlbumInfo] = useState<AlbumsType>({id: 0, title: '', userId: 0});

    useEffect(() => {
        if(params.id) {
            loadPhotos(params.id);
            loadAlbumInfo(params.id);
        }
    }, []);

    async function loadPhotos(id: string) {
        setLoading(true);
        const photos = await api.getPhotosFromAlbum(id);
        setAlbum(photos);
        setLoading(false);
    }
    const loadAlbumInfo = async (id: string) => {
        setLoading(true);
        const albumInfo = await api.getInfoAlbum(id);  
        setAlbumInfo(albumInfo);    
        setLoading(false);             
    }

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div>
            <button onClick={handleBackButton}>Voltar</button>
            {loading && "Carregando..."}
            <h1>{albumInfo.title}</h1>
            {album.map((item, index) => (
                <PhotoItem
                    key={index}
                    data={item}
                />
            ))}
        </div>
    );
}
