import React from 'react';
import ReactDOM from 'react-dom';
import 'regenerator-runtime/runtime'; // Prevent parcel's production build error

class Servant extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div></div>
        );
    }
}

let App = document.getElementById('app');

ReactDOM.render(<Servant/>, App);