import React from 'react';
import ReactDOM from 'react-dom';
import Body from './component/Body';
import 'babel-polyfill'; 


function App(){

    return (<div className="container">

                         <Body/>

    </div>)

}

ReactDOM.render(<App/>,document.getElementById('app'));
