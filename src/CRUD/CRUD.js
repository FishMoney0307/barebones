import React from "react";
import array from "./arr";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import '../Home/DBList.css';
import "bootstrap/dist/css/bootstrap.min.css";

function CRUD() {
    let history = useNavigate();

    function setID(id, title, priority) {
        localStorage.setItem("id", id);
        localStorage.setItem("title", title);
        localStorage.setItem("priority", priority);
    }

    function deleted(id) {
        let i = array
            .map(function (e){
                return e.id;
            })
            .indexOf(id);

        array.splice(i, 1);
        
        history("/");
    }

    return (
        <div className="table-container">
            <div className="table-row heading">
                <div className="row-item">Title</div>
                <div className="row-item">Priority</div>
                <div className="row-item">Action</div>
            </div>
            <div>
                {array.map((item) => {
                    return (
                        <div className="table-row">
                            <div className="row-item">{item.title}</div>
                            <div className="row-item">{item.priority}</div>
                            <div className="row-item">
                                <Button onClick={(e) => deleted(item.id)}
                                    variant="danger">Delete</Button>
                            </div>
                        </div>

                    )
                })}
            </div>
        </div>
    )
}

export default CRUD;