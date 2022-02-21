import { AlbumsType } from '../types/AlbumsType';
import { useEffect, useState } from "react";
import { api } from '../api';
import { AlbumComponent } from '../components/AlbumsComponent';

export const Home = () => {

    const [ALbumsList, setALbumsList] = useState<AlbumsType[]>([]);
    const [loading, setLoading] = useState(false); 

    useEffect(() => {
        loadingAlbums();
    }, []);
  
    //  REQUISIÇÃO COM ASYNC E AWAIT
    const loadingAlbums = async () => {
        setLoading(true);
        const albums = await api.getAllAlbums();  
        setALbumsList(albums); 
        setLoading(false);                
    } 

    return (
        <div>
            {loading && "Carregando..."}
            {ALbumsList.map((item, index) => (
                <AlbumComponent
                    key={index}
                    id={item.id}
                    title={item.title}
                />
            ))}
        </div>
    );
}