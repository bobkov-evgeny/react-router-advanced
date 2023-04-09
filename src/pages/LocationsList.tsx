import {useNavigate} from "react-router-dom";
import {HeroData} from "./HeroesList";
import {useFetchInfiniteScrollData} from "../hooks/useFetchInfiniteScrollData";
import Loader from "../components/Loader/Loader";

export interface LocationData {
    created: string;
    id: number;
    name: string;
    type: string;
    dimension: string;
}

export const LocationsList = () => {
    const navigate = useNavigate();

    const {
        lastNodeRef,
        isLoading,
        hasError,
        data,
    } = useFetchInfiniteScrollData('https://rickandmortyapi.com/api/location');

    return (
        <div className='items-container'>
            {data.length &&(data as HeroData[]).map((location, index) => (
                <div
                    key={location.id}
                    ref={data.length === index + 1 ? lastNodeRef : null}
                    className='item'
                    onClick={() => navigate(`/locations/${location.id}`)}
                >
                    <span>Location: <span className='info-value'>{location.name}</span></span>
                </div>
            ))}

            {isLoading && <Loader />}
            {hasError && <h1>Something went wrong...</h1>}
        </div>
    );
};
