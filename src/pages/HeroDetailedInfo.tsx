import {useParams} from "react-router-dom";
import {getHeroStatusTextColor} from "./HeroesList";
import {useFetch} from "../hooks/useFetch";
import Loader from "../components/Loader/Loader";

const HeroDetailedInfo = () => {
    const params = useParams();
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${params?.id}`);

    return (
        <>
            {data &&
                <div className='item-detailed-info'>
                    <img src={data.image} alt={data.name} />
                    <span>Name: <span>{data.name}</span></span>
                    <span>Gender: <span>{data.gender}</span></span>
                    <span>Species: <span>{data.species}</span></span>
                    <span>Type: <span>{data.type}</span></span>
                    <span>Status: <span style={{color: getHeroStatusTextColor(data.status as any)}}>{data.status}</span></span>
                    <span>Created: <span>{data.created}</span></span>
                </div>
            }

            {isLoading && <Loader />}
            {hasError && <span>Something went wrong...</span>}
        </>
    );
};

export default HeroDetailedInfo;