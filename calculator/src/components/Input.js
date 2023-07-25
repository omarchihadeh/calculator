import React from "react";
import './input.css'
import shortid from 'shortid';

export default function Value(props) {


    return (
        <input autoFocus key={shortid.generate()} id="display" type="text" value={props.value} readOnly />
    )
}

