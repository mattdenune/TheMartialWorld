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
            <div key={art.id}>
                <h1>{art.name}</h1>
                <h4></h4>
                <p><strong>Founded by:</strong> {art.founder}</p>
                <Link to={`/arts/${art.id}`} onClick={() => this.props.setArt(art)}>Show Martial Art</Link>
                <img alt={art.founder} src={art.founder_img} style={{width: 200}}/>
                <hr />
            </div>
        )
    }
}

export default AllArts;