import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import minimongo from 'minimongo';

(function (window, undefined) { //here undefined to protect something idiotic like undefined=true
    let LocalDb = minimongo.MemoryDb;
    let db = new LocalDb();
    window.db = db;
})(window);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
