import React, { Component } from "react";

function Login() {
    return (
        <div>
            <h1 className="text-2xl">Login</h1>
        </div>
    );
}

function Logout() {
    return (
        <div>
            <h1 className="text-2xl">Logout</h1>
        </div>
    );
}

export default class RenderizadoCondicional extends Component {
    constructor(props){
        super(props);
        this.state ={
            session: true,
        };
    }
    render(){
        return(
            <div className="mb-11">
                <h2 className="text-3xl">Renderizado Condicional</h2>
                {this.state.session ? <Login /> : <Logout />}
            </div>
        );
    }
}