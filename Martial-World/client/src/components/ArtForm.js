import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';

class ArtForm extends Component {
    state = {
        name: '',
        origin: '',
        founder: '',
        founder_img: '',
        style: '',
        description: ''
    }

    async componentDidMount() {
        if (!this.props.isUpdateForm){
            return
        }

        const idParams = this.props.match.params.idParams
        if (this.props.currentArt.id !== idParams){
            const res = await axios.get('http://localhost:3000/arts/' + idParams)
            const {name, origin, founder, founder_img, style, description} = res.data.art;
            this.setState({
                name,
                origin,
                founder,
                founder_img,
                style,
                description
            })
        }
    }

    handleFormChange = (e) => {
        const { name, origin, founder, founder_img, style, description, value } = e.target;
        this.setState({
            [name]: value,
            [origin]: value,
            [founder]: value,
            [founder_img]: value,
            [style]: value,
            [description]: value
        })
    }

    onSubmit = async (event) => {
        event.preventDefault()
        const idParams = this.props.match.params.id
        const res = this.props.isUpdateForm ?
        await axios.put('http://localhost:3000/arts/' + idParams, this.state) :
        await axios.post('http://localhost:3000/arts/', this.state)

        const art = res.data.art
        this.props.setArt(art)
        this.props.history.push('/arts/' + art.id)
    }

    render() {
        return(
            <div>
                <h2> {this.props.isUpdateForm ? "Update Martial Art" : "Create a Martial Art"} </h2>
                <form onSubmit={this.onSubmit}>
                    <label>Martial Art Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleFormChange} />
                        <br />
                    <label>Country of Origin:</label>
                    <input
                        type="text"
                        name="origin"
                        value={this.state.origin}
                        onChange={this.handleFormChange} />
                        <br />
                    <label>Founder:</label>
                    <input
                        type="text"
                        name="founder"
                        value={this.state.founder}
                        onChange={this.handleFormChange} />
                        <br />
                    <label>Photo of Founder:</label>
                    <input
                        type='text'
                        name='founder_img'
                        value={this.state.founder_img}
                        onChange={this.handleFormChange} />
                        <br/>
                    <label>Style of Art:</label>
                    <input
                        type='text'
                        name='style'
                        value={this.state.style}
                        onChange={this.handleFormChange} />
                        <br/>
                    <label>Description of art:</label>
                    <input
                        type='text'
                        name='description'
                        value={this.state.description}
                        onChange={this.handleFormChange} />
                        <br/>
                    
                        <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ArtForm;