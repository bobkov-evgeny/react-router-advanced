import {useNavigate} from "react-router-dom";
import {useFetchInfiniteScrollData} from "../hooks/useFetchInfiniteScrollData";
import Loader from "../components/Loader/Loader";

export interface EpisodeData {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    created: string;
}

const EpisodesList = () => {
    const navigate = useNavigate();

    const {
        lastNodeRef,
        isLoading,
        hasError,
        data,
    } = useFetchInfiniteScrollData('https://rickandmortyapi.com/api/episode');

    return (
        <div className='items-container'>
            {data.length && (data as EpisodeData[]).map((episode, index) => (
                <div
                    ref={data.length === index + 1 ? lastNodeRef : null}
                    key={episode.id}
                    className='item'
                    onClick={() => {
                        navigate(`/episodes/${episode.id}`)
                    }}
                >
                    <div className='item-info'>
                        <span>Episode: <span className='info-value'>{episode.episode}</span></span>
                        <span>Name: <span className='info-value'>{episode.name}</span></span>
                    </div>
                </div>
            ))}

            {isLoading && <Loader />}
            {hasError && <h1>Something went wrong...</h1>}
        </div>
    );
};

export default EpisodesList;