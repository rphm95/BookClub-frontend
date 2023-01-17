import React, {useState, useEffect} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from "react-router-dom";

function BookDetail(props){
    return (
        <div>
            <h1>this is a page for {props.book.title}</h1>
        </div>
    )
}

export default BookDetail;