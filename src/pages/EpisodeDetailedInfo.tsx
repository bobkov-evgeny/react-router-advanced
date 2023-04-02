import episodesListData from '../data/episode.json';
import {useNavigate, useParams} from "react-router-dom";
import {EpisodeData} from "./EpisodesList";

const EpisodeDetailedInfo = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    if(!id) {
        navigate(-1);
        return null;
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