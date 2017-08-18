import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import minimongo from 'minimongo';
import axios from 'axios';
let LocalDb = minimongo.MemoryDb;
let db = new LocalDb();

class App extends Component {

    initializeDB(response) {
         response.data.forEach((contract)=>{
            db.contracts.upsert(contract, function() {
                console.log("save", contract);
            });
        })
    }

    componentDidMount() {
        let that = this;
        db.addCollection("contracts");

        axios.get('http://localhost:3001/contacts')
            .then(function (response) {
                console.log(response)
                that.initializeDB(response);
                db.contracts.findOne({ id:1 }, {}, function(res) {
                    console.log("Contract's name is: " + res.name);
                });

            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
