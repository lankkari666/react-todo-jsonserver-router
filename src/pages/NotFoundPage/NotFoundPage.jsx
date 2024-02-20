import {Link} from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <>
            <div className="container">
                <Link to={"/"}>Назад</Link>
                <div>Error404</div>
            </div>
        </>
    )
}

