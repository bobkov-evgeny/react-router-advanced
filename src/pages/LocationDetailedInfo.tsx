import locationsListdata from '../data/location.json';
import {Navigate, useParams} from "react-router-dom";
import {LocationData} from "./LocationsList";
import heroesListData from "../data/characters.json";

const LocationDetailedInfo = () => {
    const {id} = useParams();

    if(!id || (+id - 1) > heroesListData.length) {
        return <Navigate to='/heroes' />;
    }

    const {
        name,
        type,
        dimension,
        created
    }: LocationData = locationsListdata[+id - 1];

    return (
        <div className='item-detailed-info'>
            <span>Location: <span>{name}</span></span>
            <span>Type: <span>{type}</span></span>
            <span>Dimension: <span>{dimension}</span></span>
            <span>Created: <span>{created}</span></span>
        </div>
    );
};

export default LocationDetailedInfo;