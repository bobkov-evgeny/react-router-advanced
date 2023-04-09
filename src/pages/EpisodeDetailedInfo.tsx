import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import Loader from "../components/Loader/Loader";

const EpisodeDetailedInfo = () => {
    const params = useParams();
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/episode/${params?.id}`);

    return (
        <>
            {data &&
                <div className='item-detailed-info'>
                    <span>Episode: <span>{data.episode}</span></span>
                    <span>Name: <span>{data.name}</span></span>
                    <span>Air date: <span>{data.air_date}</span></span>
                    <span>Created: <span>{data.created}</span></span>
                </div>
            }

            {isLoading && <Loader />}
            {hasError && <span>Something went wrong...</span>}
        </>
    );
};

export default EpisodeDetailedInfo;