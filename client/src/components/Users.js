import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Users.css';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remoteData: [],
            localData: []
        }
        this.getDataRemote = this.getDataRemote.bind(this);
        this.getDataLocal = this.getDataLocal.bind(this);
        this.addTolocal = this.addTolocal.bind(this);
        this.deleteFromLocal = this.deleteFromLocal.bind(this);



    }
    componentDidMount() {
        this.getDataRemote();
        this.getDataLocal();
    }



    render() {
        const columnsRemote = [{
            Header: "Agregar a Local",
            id: 'link',
            accessor: "id",
            Cell: props => <div><a href="#" alt="agregar a base local" onClick={() => this.addTolocal(props.value)}><i className="material-icons icon" alt="agregar a base local">get_app</i>
            </a></div>

        }, {
            Header: 'Nombre',
            accessor: 'name'
        }, {
            Header: 'Usuario',
            accessor: 'username'
        }, {
            Header: 'Correo Electrónico',
            accessor: 'email'
        }, {
            Header: 'Direccion',
            accessor: 'address.street'
        }, {
            Header: 'Suite',
            accessor: 'address.suite'
        }, {
            Header: 'Ciudad',
            accessor: 'address.city'
        }, {
            Header: 'Codigo Postal',
            accessor: 'address.zipcode'
        }, {
            Header: 'Latitud',
            accessor: 'address.geo.lat'
        }, {
            Header: 'longitud',
            accessor: 'address.geo.lng'
        }, {
            Header: 'Telefono',
            accessor: 'phone'
        }, {
            Header: 'Web',
            accessor: 'website'
        }, {
            Header: 'Compañia',
            accessor: 'company.name'
        }, {
            Header: 'Eslogan',
            accessor: 'company.catchPhrase'
        }, {
            Header: 'Negocio',
            accessor: 'company.bs'
        }
        ]
        const columnsLocal = [{
            Header: "Eliminar Registro",
            id: 'link',
            accessor: "id",
            Cell: props => <div><a href="#" alt="eliminar de base local" onClick={() => this.deleteFromLocal(props.value)}><i className="material-icons icon" alt="agregar a base local">delete</i>
            </a></div>

        }, {
            Header: 'Nombre',
            accessor: 'name'
        }, {
            Header: 'Usuario',
            accessor: 'username'
        }, {
            Header: 'Correo Electrónico',
            accessor: 'email'
        }, {
            Header: 'Direccion',
            accessor: 'add_street'
        }, {
            Header: 'Suite',
            accessor: 'add_suite'
        }, {
            Header: 'Ciudad',
            accessor: 'add_city'
        }, {
            Header: 'Codigo Postal',
            accessor: 'add_zipcode'
        }, {
            Header: 'Latitud',
            accessor: 'add_geo_lat'
        }, {
            Header: 'longitud',
            accessor: 'add_geo_lng'
        }, {
            Header: 'Telefono',
            accessor: 'phone'
        }, {
            Header: 'Web',
            accessor: 'website'
        }, {
            Header: 'Compañia',
            accessor: 'cmp_name'
        }, {
            Header: 'Eslogan',
            accessor: 'cmp_catch_phrase'
        }, {
            Header: 'Negocio',
            accessor: 'cmp_bs'
        }
        ]

        /*, {
            Header: 'Usuario',
            accessor: 'username',
            Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
        }, {
            id: 'friendName', // Required because our accessor is not a string
            Header: 'Friend Name',
            accessor: d => d.friend.name // Custom value accessors!
        }, {
            Header: props => <span>Friend Age</span>, // Custom header components!
            accessor: 'friend.age'
        }]*/

        return (
            <div className="About">
                <h1 className="text-center">Usuarios REST</h1>
                <h2>Datos de Origen:</h2>
                <p>Esta aplicación crea una base de datos de usuarios local a partir de la siguiente api <a href="https://jsonplaceholder.typicode.com/users">https://jsonplaceholder.typicode.com/users</a></p>
                <h2>Datos extraidos del Servidor Remoto:</h2>


                <ReactTable
                    data={this.state.remoteData}
                    columns={columnsRemote}
                    minRows={3}
                />
                <h2>Datos de La base de datos Local:</h2>
                <ReactTable
                    data={this.state.localData}
                    columns={columnsLocal}
                    minRows={3}
                />


            </div>
        )
    }
    getDataRemote() {
        fetch('/api/users/external')
            .then(res => res.json())
            .then(res => {
                if (res.error !== undefined) {
                    this.setState({ error: res.error });
                } else {
                    //console.log(res);
                    this.setState({ remoteData: res });
                }

            });
    }
    getDataLocal() {
        fetch('/api/users')
            .then(res => res.json())
            .then(res => {
                if (res.error !== undefined) {
                    this.setState({ error: res.error });
                } else {
                    //console.log(res);
                    this.setState({ localData: res });
                }

            });
    }
    addTolocal(idToAdd) {

        let userToAdd = this.state.remoteData;

        userToAdd = userToAdd.filter(function (el) {
            return el.id === idToAdd;
        });

        //console.log(userToAdd);

        fetch('/api/users', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userToAdd)
        })
            .then(res => res.json())
            .then(res => {
                if (res.error !== undefined) {
                    alert(" error:" + res.error);
                }
            });
        this.getDataLocal();

    }
    deleteFromLocal(idToDelete) {

        //console.log(userToAdd);

        fetch('/api/users/'+idToDelete, {
            method: 'delete',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id:idToDelete})
        })
            .then(res => res.json())
            .then(res => {
                if (res.error !== undefined) {
                    alert(" error:" + res.error);
                }
            });
        this.getDataLocal();

    }
}
export default Users;