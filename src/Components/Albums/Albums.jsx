import { useEffect } from 'react';
import Albom from './Albom';
import {GetAlbom} from '../service/ApiService';
import { useDispatch, useSelector } from 'react-redux';


const Albums = () =>{

    const albums = useSelector((store) => store.albumsReducers.albums);
    const dispatch = useDispatch()
    useEffect(() =>{
      GetAlbom.handleAlbom(dispatch);
    },[])

    return(
        <div style={{display:"flex", flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {albums?.map((album) => <Albom key={album.id} album={album}/>)}
        </div>    
    );
}

export default Albums;
