import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    return (
        <>
            <div>{error.message}</div>
            <pre>{error.status} - {error.statusText}</pre>
        </>
        
    )
}

export default Error;