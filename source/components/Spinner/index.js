// Core
import React, { Component } from 'react';
// import { createPortal } from 'react-dom';

//Imstryments
import Styles from './styles.m.css';

// const portal = document.getElementById('spinner');

export default class Spinner extends Component {
    render () {

        const { isSpinning } = this.props;

        if (!isSpinning) {
            return null;
        }

        return (<div className = { Styles.spinner } />);


    }
}
