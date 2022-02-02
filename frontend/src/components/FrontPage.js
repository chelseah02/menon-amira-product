import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

class FrontPage extends Component {

    state = {
        redirect: false,
        data: NaN,
    }
    
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to={{
                    pathname: '/story',
                    state: { data: this.state.data }
                }}
            />
        }
    }

    handleUpload = (event) => {
        const data = new FormData();
        data.append('story_text', event.target.files[0]);
        data.append('transcript', event.target.files[1]);
        data.append('name', 'some value user types');
        data.append('description', 'some value user types');
        // '/files' is your node.js route that triggers our middleware
        axios.defaults.baseURL = 'http://localhost:8080';
        axios.post('/files', data, {"Access-Control-Allow-Origin": "*"}).then((response) => {
            this.setState({
                redirect: true,
                data: response.data
            })
            console.log(response);
        });
    }

    render() {
        return(
            
            <div>
                {this.renderRedirect()}
                <input type="file" onChange={this.handleUpload} multiple="multiple" />
            </div>
        )
        
    }
}

export default FrontPage;