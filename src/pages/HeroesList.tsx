import heroesListData from '../data/characters.json';
import {useNavigate} from "react-router-dom";

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

    return (
        <div className='items-container'>
            {(heroesListData as HeroData[]).map(hero => (
                <div
                    key={hero.id}
                    className='item'
                    onClick={() => {
                        navigate(`/heroes/${hero.id}`)
                    }}
                >
                    <img src={hero.image} alt={hero.name} />

                    <div className='item-info'>
                        <span>Name: <span className='info-value'>{hero.name}</span></span>
                        <span>Status: <span className='info-value' style={{color: getHeroStatusTextColor(hero.status as any)}}>{hero.status}</span></span>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default HeroesList;