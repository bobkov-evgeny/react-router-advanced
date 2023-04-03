import episodesListData from '../data/episode.json';
import {Navigate, useParams} from "react-router-dom";
import {EpisodeData} from "./EpisodesList";
import heroesListData from "../data/characters.json";

const EpisodeDetailedInfo = () => {
    const {id} = useParams();

    if(!id || (Number(id) - 1) > heroesListData.length) {
        return <Navigate to='/heroes' />;
    }

    const {
        name,
        episode,
        air_date,
        created
    }: EpisodeData = episodesListData[+id - 1];

    return (
        <div className='item-detailed-info'>
            <span>Episode: <span>{episode}</span></span>
            <span>Name: <span>{name}</span></span>
            <span>Air date: <span>{air_date}</span></span>
            <span>Created: <span>{created}</span></span>
        </div>
    );
};

export default EpisodeDetailedInfo;