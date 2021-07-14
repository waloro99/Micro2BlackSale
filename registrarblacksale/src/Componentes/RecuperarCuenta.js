import React, { Component } from 'react';
import '../assets/css/RecuperarCuenta.css';
import logo from '../assets/images/logo horizontal.png';
import MayorQue from '@material-ui/icons/ArrowForwardIos';
import logo2 from '../assets/images/Logo.jpg';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal, ModalBody, ModalHeader, ModalFooter} from 'reactstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import CancelIcon from '@material-ui/icons/Cancel';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import DoneIcon from '@material-ui/icons/Done';
import ClearIcon from '@material-ui/icons/Clear';

const url = 'http://localhost:3306/api/v1/users/';

class RecuperarCuenta extends Component {

    state = {
        data:[],
        modalInsert: false,
        modalDelete: false,
        form:{
            _id: '',
            name: '',
            lastname: '',
            email: '',
            role: 'Empleado',
            enabled: '0',
            permissionCreate: '0',
            permissionEdit: '0',
            permissionDelete: '0'
            //modalType: ''
        }
    }

    peticionGet=()=>{
        axios.get(url).then(response=>{
            this.setState({data: response.data});
            console.log(response.data);
        }).catch(error=>{
            console.log(error.message);
        })
    }

    peticionPost=async()=>{
        this.state.form.role='Empleado'
        this.state.form.enabled='0'
        this.state.form.permissionCreate='0'
        this.state.form.permissionEdit='0'
        this.state.form.permissionDelete='0'
        await axios.post(url,this.state.form).then(response=>{
            this.modalInsert();
            this.peticionGet();
            console.log(response.data);
        })/*.catch(error=>{
            console.log(error.message);
        })*/
    }

    peticionPut=()=>{
        axios.put(url+this.state.form._id, this.state.form).then(response=>{
            this.modalInsert();
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }
    
    peticionDelete=()=>{
        axios.delete(url+this.state.form._id).then(response=>{
            this.setState({modalDelete: false});
            this.peticionGet();
        }).catch(error=>{
            console.log(error.message);
        })
    }
    modalInsert=()=>{
        this.setState({modalInsert: !this.state.modalInsert});
    }

    chooseProduct=(elemento)=>{
        this.setState({
            modalType: 'edit',
            form: {
                _id: elemento._id,
                name: elemento.name,
                lastname: elemento.lastname,
                email: elemento.email,
                role: elemento.role,
                enabled: elemento.enabled,
                permissionCreate: elemento.permissionCreate,
                permissionEdit: elemento.permissionEdit,
                permissionDelete: elemento.permissionDelete
                //modalType: ''
            }
        })
    }

    handleChange=async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    handleChange2=async e=>{
        e.persist();
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }


    componentDidMount() {
        this.peticionGet();
    }

    render(){
        const {form}=this.state;


    return(
        <div className="main-recuperar">
        <div className="content-wrap">
            <div className="leftSiteRC">
                <div className="logoC">
                    <img src={logo}></img>
                </div>                    
                <h2>Inicio <MayorQue/> Registrarse</h2>
                <div className="logo2C">
                    <img src={logo2}></img>
                </div>                   
            </div>
            <div className="rightSiteRC">       
                <div className="header">
                    <h2>Completa el formulario:</h2>
                </div> 
                <div className="bodyRightSite">
                        <div className="Products">
                            <div className="AgregarProducto">
                            <button className="btn btn-success" onClick={()=>{this.setState({form: null, modalType: 'insert'}); this.modalInsert()}}>Registrarse <AddIcon/></button></div>
                            <br/>
                            

                            <Modal isOpen={this.state.modalDelete}>
                                <ModalBody>
                                    ¿Estas seguro de eliminar el usuario de {form && form.name}?
                                </ModalBody>
                                <ModalFooter>
                                    <button className="btn btn-danger" onClick={() => this.peticionDelete()}>
                                        Si <DoneIcon/>
                                    </button>
                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => this.setState({modalDelete: false})}>
                                        No <ClearIcon/>
                                    </button>
                                </ModalFooter>
                            </Modal>

                            <Modal isOpen={this.state.modalInsert}>
                                <ModalHeader>
                                    <div>
                                        <h3>Usuario</h3>
                                    </div>
                                </ModalHeader>
                                <ModalBody>
                                    <div className="form-group">
                                        <label>Nombre del Usuario:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="name"
                                            placeholder="Nombre..."
                                            value={form?form.name: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Apellido del Usuario:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="lastname"
                                            placeholder="Apellido..."
                                            value={form?form.lastname: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Correo Electrónico:</label>
                                            <input
                                            className="form-control"
                                            type="text"
                                            name="email"
                                            placeholder="correo@correo.com"
                                            value={form?form.email: ''}
                                            onChange={this.handleChange}
                                            />
                                        <br />
                                        <label>Rol del Usuario:</label>
                                            <select
                                            className="form-control"
                                            type="text"
                                            name="role"
                                            value={form?form.role: ''}
                                            onInput={this.handleChange}
                                            >
                                            <option>Empleado</option>
                                            </select>
                                        <br />
                                        <label>Habilitado:</label>
                                            <select
                                            className="form-control"
                                            type="number"
                                            name="enabled"
                                            value={form?form.enabled: 'Deshabilitado'}
                                            onChange={this.handleChange}
                                            >
                                            <option>Deshabilitado</option>
                                            </select>
                                        <br />
                                        <label>Permitido Agregar:</label>
                                            <select
                                            className="form-control"
                                            type="number"
                                            name="permissionCreate"
                                            value={form?form.permissionCreate: 'Deshabilitado'}
                                            onChange={this.handleChange}
                                            >
                                            <option>Deshabilitado</option>
                                            </select>
                                        <br />
                                            <label>Permitido Editar:</label>
                                            <select
                                            className="form-control"
                                            type="number"
                                            name="permissionEdit"
                                            value={form?form.permissionEdit: 'Deshabilitado'}
                                            onChange={this.handleChange}
                                            >
                                            <option>Deshabilitado</option>
                                            </select>
                                        <br />
                                            <label>Permitido Eliminar:</label>
                                            <select
                                            className="form-control"
                                            type="number"
                                            name="permissionDelete"
                                            value={form?form.permissionDelete: 'Deshabilitado'}
                                            onChange={this.handleChange}
                                            >
                                            <option>Deshabilitado</option>
                                            </select>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    {this.state.modalType == 'insert' ?
                                        <button className="btn btn-success"
                                            onClick={()=>this.peticionPost()}>
                                            Guardar  <SaveAltIcon/>
                                        </button> :
                                        <button className="btn btn-primary"
                                        onClick={()=>this.peticionPut()}>
                                            Editar  <SaveAltIcon/>
                                        </button>
                                    }
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => this.modalInsert()}>
                                        Cancelar <CancelIcon/>
                                    </button>
                                </ModalFooter>
                            </Modal>
                        </div>
                    </div>       
            </div>
        </div>
    </div>
    )
}

}
export default RecuperarCuenta;