import React, { Component } from 'react';
import axios from 'axios';

class ShowArt extends Component {
    constructor(props) {
        super(props) 
    }
    
    async componentDidMount() {
        const idParams = this.props.match.params.id
        if (this.props.currentArt.id !== idParams){
            const artData = await axios.get('http://localhost:3000/arts/' + idParams)
            this.props.setArt(artData.data.art)
        }
    }

    handleDelete = async () => {
        await axios.delete('http://localhost:3000/arts/' + this.props.currentArt.id)
        this.props.handleDeleteArt(this.props.currentArt)
        this.props.history.push('/')
    }

    render() {
        const art = this.props.currentArt
        return(
            <div>
                <h1>{art.name}</h1>
                <p><strong>Founded by:</strong> {art.founder}</p> 
                <img alt={art.founder} src={art.founder_img} style={{ width: 200 }} />
                <button onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default ShowArt;