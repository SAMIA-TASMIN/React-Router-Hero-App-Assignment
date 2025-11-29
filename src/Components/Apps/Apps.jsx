import { Link } from "react-router";
import AppTiles from "../AppTiles/AppTiles";


const Apps = ({data}) => {
    
    return (
        
        <div className="container mx-auto my-8">
            <div className="text-center my-4">
                <h1 className="font-bold text-4xl">Trending Apps</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptate.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
                {
                data.slice(0,10).map(app=><AppTiles key={app.id} app={app} ></AppTiles>)
            }
            </div>
            <div  className=" flex justify-center my-1">
                <Link to={`/allapps`}><button  className="btn btn-info">Show all</button></Link>
            </div>
        </div>
    );
};

export default Apps;