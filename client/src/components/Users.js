import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './Users.css';

class Calc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remoteData: [],
            localData: []
        }
        this.getDataLocal = this.getDataLocal.bind(this);



    }
    componentDidMount() {
        this.getDataLocal();
    }



    render() {
        const columnsLocal = [
        {
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


        return (
            <div className="About">
                <h1 className="text-center">Usuarios REST</h1>
                <h2>Datos de La base de datos Local:</h2>
                <ReactTable
                    data={this.state.localData}
                    columns={columnsLocal}
                    minRows={3}
                />


            </div>
        )
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
}
export default Calc;