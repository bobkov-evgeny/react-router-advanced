import episodesListData from '../data/episode.json';
import {useNavigate} from "react-router-dom";

export interface EpisodeData {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    created: string;
}

const EpisodesList = () => {
    const navigate = useNavigate();

    return (
        <div className='items-container'>
            {(episodesListData as EpisodeData[]).map(episode => (
                <div
                    key={episode.id}
                    className='item'
                    onClick={() => {
                        console.log(episode.id)
                        navigate(`/episodes/${episode.id}`)
                    }}
                >
                    <div className='item-info'>
                        <span>Episode: <span className='info-value'>{episode.episode}</span></span>
                        <span>Name: <span className='info-value'>{episode.name}</span></span>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default EpisodesList;