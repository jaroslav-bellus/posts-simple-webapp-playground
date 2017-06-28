import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Post } from './components/Post';

const MULTIPLY_DATA_FACTOR = 1;

class App extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            filteredData: [],
        }
    }

    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                let constructedData = [];

                Array.apply(null, {length: MULTIPLY_DATA_FACTOR})
                    .forEach((_, index) => {
                        constructedData = [
                            ...constructedData, 
                            ...data.map(x => { 
                                return {...x, id: `${index}_${x.id}`};
                            })
                        ];
                    });

                this.setState({
                    data: constructedData,
                    filteredData: constructedData,
                });
            });
    }

    onTextFilterChange(evt) {
        const textFilter = evt.target.value;
        const filteredData = this.state.data.filter(x => ~x.body.indexOf(textFilter));

        this.setState({
            textFilter: textFilter,
            filteredData: filteredData,
        });
    }
    
    render() {
        var len = this.state.filteredData.length;

        const posts = this.state.filteredData
            .map((post) => 
                <Post key={post.id} title={post.title} body={post.body} />
            );

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>My Posts</h2>
                </div>
                <div className="App-intro">
                    <p>
                        <input 
                            className="input-filter"
                            type="text" 
                            placeholder="Enter text to filter posts"
                            value={this.state.textFilter}
                            xonChange={(evt) => this.setState({textFilter: evt.target.value})}
                            onChange={this.onTextFilterChange.bind(this)}
                        ></input>
                    </p>
                    
                    <p>
                        There are {len} Posts
                    </p>
                    
                    <div className="post-list">
                        {posts}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
