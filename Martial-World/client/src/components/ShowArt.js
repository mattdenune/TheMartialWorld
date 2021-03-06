import React, { Component } from 'react';
import axios from 'axios';

class ShowArt extends Component {
    constructor(props) {
        super(props) 
    }
    
    async componentDidMount() {
        const idParams = this.props.match.params.id
        if (this.props.currentArt.id !== idParams){
            const artData = await axios.get('/arts/' + idParams)
            this.props.setArt(artData.data.art)
        }
        
    }

    handleDelete = async () => {
        await axios.delete('/arts/' + this.props.currentArt.id)
        this.props.handleDeleteArt(this.props.currentArt)
        this.props.history.push('/')
    }

    render() {
        const art = this.props.currentArt
        console.log(art.images)
        return(
            <div className='single-art-box'>
                <div>
                    <h1>{art.name}</h1>
                    <p className='text'><strong>Country of Origin:</strong> {art.origin}</p> 
                    <p className='text'><strong>Style:</strong> {art.style}</p> 
                    <p className='text'><strong>Founded by:</strong> {art.founder}</p> 
                    <img className='founder-img' alt={art.founder} src={art.founder_img} style={{ width: 200 }} />
                    <p className='single-description-box'>{art.description}</p>

                    <button className='delete-button' onClick={this.handleDelete}>Delete</button>
                </div>
                <div id='images-box' className='single-images-box'>
                    {
                    art.images && art.images.map((image, index) => (
                        <img key={index} src={image} />
                    ))    
                    }
                </div>
            </div>
        )
    }
}

export default ShowArt;