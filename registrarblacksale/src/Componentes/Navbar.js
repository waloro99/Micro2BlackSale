import React, {useState} from 'react';
import '../assets/css/App.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

function Navbar(){
    /* Es un estado en el que se encuentra para que aparezca el boton cuando la pantalla este menor ancho */
    const[showLinks, setShowLinks] = useState(false);
    return(
        <div className="Navbar">
            <div className="leftSide">
                <div className="links" id={showLinks ? "hidden" : ""}> 
                    <Link to="/">Inicio</Link>
                </div>
                <div className="tituloApp">
                    <h3>BLACK SALE</h3>
                </div>               
                <button onClick={() => setShowLinks(!showLinks)}>
                    <ReorderIcon/>
                </button>
            </div>
            <div className="rightSide">
        
            </div>
        </div>
    )
}

export default Navbar;
