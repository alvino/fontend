import React, { Component } from 'react';
import api from '../../server/api';

import './styles.css';
import  logo from '../../assets/logo.svg';

export default class Main extends Component {

    state = {
        newBox: ""
    };

    handleSubmit = async (e) => {
        e.preventDefault();

        const response = await api.post('/boxes', {
            title: this.state.newBox
        });
        
        this.props.history.push(`/box/${response.data._id}`);
    };

    hanbleInputChange = (e) => {
        this.setState( {newBox: e.target.value} )
    };
    
    render() {
        return (
            <div id="main-container">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt="" />
                    <input 
                        placeholder="Criar um box" 
                        value={this.state.newBox}
                        onChange={this.hanbleInputChange}
                    />
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}
