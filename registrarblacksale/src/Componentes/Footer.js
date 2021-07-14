import React from 'react';
import '../assets/css/Footer.css';
import face from '../assets/images/face.png';
import insta from '../assets/images/insta.png';
import { Link } from 'react-router-dom';

function Footer(){
    return(
        <div className="main-footer">
            <div className="container">
            <hr className="barra"></hr>
                <div className="row">
                    {/*Column1*/}
                    <div className="col"> 
                        <ui className = "list-unstyled1">
                            <div className = "leftCol" >
                                <li>Contáctanos:</li>
                            </div>
                            <div className="rightCol">
                                <div className="arribaCol">
                                    <li><a href="https://www.facebook.com/blacksalegt/"><img src={face}></img></a></li>
                                    <li><a href="https://www.instagram.com/blacksalegt/"><img src={insta}></img></a></li>
                                </div>
                                <div className="abajoCol">
                                    <li>@blacksalegt</li>
                                </div>
                            </div>
                        </ui>                      
                    </div>
                    {/*Column2*/}
                    <div className="col2"> 
                        <ui className = "list-unstyled2">
                            <div className="leftCol2">
                                <li><Link to="/">Inicio</Link></li>
                                <li><Link to="/">Productos</Link></li>
                            </div>
                            <div className="rightCol2">
                                <li><Link to="/">Promociones</Link></li>
                                <li><Link to="/">Nuevo Ingreso</Link></li>
                            </div>
                        </ui> 
                    </div>
                    {/*Column4*/}
                    <div className="col"> 
                        <ui className = "list-unstyled3">
                            <li>HORARIO DE ATENCIÓN:</li>
                            <li>Lunes a Viernes: 8:00 AM a 5:00 PM</li>
                            <li>Sábado y Domingo: Cerrado</li>
                        </ui>                      
                    </div>
                </div>
                <hr className="barra"></hr>
                <div className="row">
                    <p className="col-sm">
                        Black Sale &copy;{new Date().getFullYear()} All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;