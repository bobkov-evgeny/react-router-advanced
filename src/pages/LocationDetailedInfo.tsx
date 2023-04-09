import {useParams} from "react-router-dom";
import {useFetch} from "../hooks/useFetch";
import Loader from "../components/Loader/Loader";

const LocationDetailedInfo = () => {
    const params = useParams();
    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/location/${params?.id}`);

    return (
        <>
            {data &&
                <div className='item-detailed-info'>
                    <span>Location: <span>{data.name}</span></span>
                    <span>Type: <span>{data.type}</span></span>
                    <span>Dimension: <span>{data.dimension}</span></span>
                    <span>Created: <span>{data.created}</span></span>
                </div>
            }

            {isLoading && <Loader />}
            {hasError && <span>Something went wrong...</span>}
        </>
    );
};

export default LocationDetailedInfo;