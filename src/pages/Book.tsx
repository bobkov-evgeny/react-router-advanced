import {useParams, useOutletContext} from "react-router-dom";

export const Book = () => {
    const param = useParams();
    // const contextOutlet = useOutletContext();

    return (
        <h1>Book - {param.id}</h1>
    )
}