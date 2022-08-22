import React from 'react';
import { useParams } from 'react-router-dom';

export default function About() {
    let { id } = useParams();
    return(
        <>
            <h1>Hello there user {id}</h1>
        </>
    )
}