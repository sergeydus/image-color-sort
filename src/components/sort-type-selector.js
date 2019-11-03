import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
export default function SortTypeSelector(props) {
    console.log(' sort type-rerendered');
    return (
        <div style={{textAlign:'left'}}>
            Sort Algorithm:
            <ul >
                <li>
                    <input type='radio' name="SortRadio" />Bubble Sort
                </li>
                <li>
                    <input type='radio' name="SortRadio"/>Insertion Sort
                </li>
                <li>
                    <input type='radio' name="SortRadio"/>PlaceHolder
                </li>
                <li>
                    <input type='radio' name="SortRadio"/>PlaceHolder
                </li>
            </ul>
            Sort Direction:
            <ul style={{textAlign:'left'}} onChange={(e)=>console.log(e.target)}>
                <li>
                    <input type='radio' name="SortTypeRadio" value=""  checked={props.sortDirection===0} onChange={()=>{props.setSortDirection(0)}}/>By Row
                </li>
                <li>
                    <input type='radio' name="SortTypeRadio" value="" checked={props.sortDirection===1} onChange={()=>{props.setSortDirection(1)}}/>By Column
                </li>
                <li>
                    <input type='radio' name="SortTypeRadio" value="" checked={props.sortDirection===2} onChange={()=>{props.setSortDirection(2)}}/>Both (N^N)
                </li>
            </ul>
            Sort By:
            <ul >
                <li>
                    <input type='radio' name="SortByRadio" />Hue
                </li>
                <li>
                    <input type='radio' name="SortByRadio"/>Proximity
                </li>
                <li>
                    <input type='radio' name="SortByRadio"/>RGB
                </li>
            </ul>
            
        </div>
    );
}
