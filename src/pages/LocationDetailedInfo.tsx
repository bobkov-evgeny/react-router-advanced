import locationsListdata from '../data/location.json';
import {useNavigate, useParams} from "react-router-dom";
import {LocationData} from "./LocationsList";

const LocationDetailedInfo = () => {
    const navigate = useNavigate();
    const {id} = useParams();

    if(!id) {
        navigate(-1);
        return null;
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