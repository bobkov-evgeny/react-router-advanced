import heroesListData from '../data/characters.json';
import {Navigate, useParams} from "react-router-dom";
import {HeroData} from "./HeroesList";

const HeroDetailedInfo = () => {
    const {id} = useParams();

    if(!id || (+id - 1) > heroesListData.length) {
        return <Navigate to='/heroes' />;
    }

    const {
        name,
        image,
        gender,
        species,
        type,
        status,
        created
    }: HeroData = heroesListData[+id - 1];

    return (
        <div className='item-detailed-info'>
            <img src={image} alt={name} />
            <span>Name: <span>{name}</span></span>
            <span>Gender: <span>{gender}</span></span>
            <span>Species: <span>{species}</span></span>
            <span>Type: <span>{type}</span></span>
            <span>Status: <span>{status}</span></span>
            <span>Created: <span>{created}</span></span>
        </div>
    );
};

export default HeroDetailedInfo;