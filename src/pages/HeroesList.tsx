import {useNavigate} from "react-router-dom";
import {useFetchInfiniteScrollData} from "../hooks/useFetchInfiniteScrollData";
import Loader from "../components/Loader/Loader";

export interface HeroData {
    created: string;
    gender: string;
    id: number;
    image: string;
    name: string;
    species: string;
    status: string;
    type: string;
}

export const getHeroStatusTextColor = (status: 'Alive' | 'Dead' | 'unknown') => {
    if(status === 'Alive') {
        return 'green';
    } else if(status === 'Dead') {
        return 'red';
    } else {
        return 'gray';
    }
};

const HeroesList = () => {
    const navigate = useNavigate();

    const {
        lastNodeRef,
        isLoading,
        hasError,
        data,
    } = useFetchInfiniteScrollData('https://rickandmortyapi.com/api/character');

    return (
        <div className='items-container'>
            {data.length && (data as HeroData[]).map((hero, index) => (
                <div
                    ref={data.length === index + 1 ? lastNodeRef : null}
                    key={hero.id}
                    className='item'
                    onClick={() => navigate(`/heroes/${hero.id}`)}
                >
                    <img src={hero.image} alt={hero.name} />

                    <div className='item-info'>
                        <span>Name: <span className='info-value'>{hero.name}</span></span>
                        <span>Status: <span className='info-value' style={{color: getHeroStatusTextColor(hero.status as any)}}>{hero.status}</span></span>
                    </div>
                </div>
            ))}

            {isLoading && <Loader />}
            {hasError && <h1>Something went wrong...</h1>}
        </div>
    );
};

export default HeroesList;