import React from 'react';
import './App.css';
import { Confirm } from './Confirm/Confirm';

const onCancel = () => {
    console.log('cancelled');
};

const onConfirm = () => {
    console.log('confirmed');
};

function App() {
    return (
        <div className='App'>
            <Confirm title='Are you sure?' content='You are not going back.' onCancel={onCancel} onConfirm={onConfirm}></Confirm>
        </div>
    );
}

export default App;
