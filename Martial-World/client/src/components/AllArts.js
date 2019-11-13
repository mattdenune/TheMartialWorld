import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllArts extends Component {

    componentDidMount() {
        if(!this.props.artsLoaded) {
            this.props.getAllArts()
        }
    }

    render() {
        return this.props.arts.map(art =>
            <div key={art.id} className='main-art-box'>
                <h1>{art.name}</h1>
                <p className='text'><strong>Country of Origin:</strong> {art.origin}</p>
                <p className='text'><strong>Style:</strong> {art.style}</p>
                <p className='text'><strong>Founded by:</strong> {art.founder}</p>
                <img alt={art.founder} src={art.founder_img} style={{width: 200}}/>
                <br />
                <p className="main-description-box">{art.description}</p>
                <Link className='text-art' to={`/arts/${art.id}`} onClick={() => this.props.setArt(art)}>Show Martial Art</Link>
                <hr />
            </div>
        )
    }
}

export default AllArts;