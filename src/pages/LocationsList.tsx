import locationsListData from '../data/location.json';
import {useNavigate} from "react-router-dom";

export interface LocationData {
    created: string;
    id: number;
    name: string;
    type: string;
    dimension: string;
}

const LocationsList = () => {
    const navigate = useNavigate();

    return (
        <div className='items-container'>
            {(locationsListData as LocationData[]).map(location => (
                <div
                    key={location.id}
                    className='item'
                    onClick={() => {
                        console.log(location.id)
                        navigate(`/locations/${location.id}`)
                    }}
                >
                    <span>Location: <span className='info-value'>{location.name}</span></span>
                </div>
            ))}
        </div>
    );
};

export default LocationsList;

