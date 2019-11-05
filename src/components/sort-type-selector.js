import React, { useRef, useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../pages/home.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { SortByHue, SortByHueByRow, Sort, RandomizeCanvas, CancelSort, SortByHueByCol, InsertionSortByHueByRow, InsertionSortByHueByCol, InsertionSortByHue,SortByHueSKIP } from '../functions'

export default function SortTypeSelector(props) {
    let canvasRef = props.canvasRef;
    console.log(canvasRef);
    console.log(' sort type-rerendered');
    const [isSortRunning, setSortRunning] = useState(false);
    const [sortSpeed, setSortSpeed] = useState(0);//from 0 to 100, 0 is fastest
    const [sortDirection, setSortDirection] = useState(0);//0-Row,1-Col,2-Both
    const [sortAlgorithm, SetSortAlgorithm] = useState(0);//0-bubblesort,1-insertion
    console.log('rerender?', isSortRunning);
    /////////////////////////////////


    useEffect(() => {
        // Update the document title using the browser API
        console.log('rerender, issortrunning=', isSortRunning, 'sortdirection:', sortDirection, 'sortalgorithm:', sortAlgorithm);
    });
    function StartSort() {

        switch (sortAlgorithm) {
            case 0:
                switch (sortDirection) {
                    case 0:
                        Sort(SortByHueByRow, sortSpeed, canvasRef, setSortRunning);
                        break;
                    case 1:
                        Sort(SortByHueByCol, sortSpeed, canvasRef, setSortRunning);
                        break;
                    case 2:
                        Sort(SortByHue, sortSpeed, canvasRef, setSortRunning);
                        break;
                    default:
                        Sort(SortByHueByRow, sortSpeed, canvasRef, setSortRunning);
                }
                break;
            case 1:
                switch (sortDirection) {
                    case 0:
                        Sort(InsertionSortByHueByRow, sortSpeed, canvasRef, setSortRunning);
                        break;
                    case 1:
                        Sort(InsertionSortByHueByCol, sortSpeed, canvasRef, setSortRunning);
                        break;
                    case 2:
                        Sort(InsertionSortByHue, sortSpeed, canvasRef, setSortRunning);
                        break;
                    default:
                        Sort(InsertionSortByHueByRow, sortSpeed, canvasRef, setSortRunning);
                }
                break;
            default:
                break;
        }

    }
    return (
        <div className="input-container">
            <div className="input-container-item">

                <p>Sort Algorithm:</p>
                <ul >
                    <li>
                        <input type='radio' name="SortRadio" checked={sortAlgorithm === 0} onChange={() => { SetSortAlgorithm(0) }} />Bubble Sort
                </li>
                    <li>
                        <input type='radio' name="SortRadio" checked={sortAlgorithm === 1} onChange={() => { SetSortAlgorithm(1) }} />Insertion Sort
                </li>
                    <li>
                        <input type='radio' name="SortRadio" checked={sortAlgorithm === 2} disabled onChange={() => { SetSortAlgorithm(2) }} />PlaceHolder
                </li>
                    <li>
                        <input type='radio' name="SortRadio" checked={sortAlgorithm === 3} disabled onChange={() => { SetSortAlgorithm(3) }} />PlaceHolder
                </li>
                </ul>
            </div>
            <div className="input-container-item">

                Sort Direction:
            <ul onChange={(e) => console.log(e.target)}>
                    <li>
                        <input type='radio' name="SortTypeRadio" value="" checked={sortDirection === 0} onChange={() => { setSortDirection(0) }} />By Row
                </li>
                    <li>
                        <input type='radio' name="SortTypeRadio" value="" checked={sortDirection === 1} onChange={() => { setSortDirection(1) }} />By Column
                </li>
                    <li>
                        <input type='radio' name="SortTypeRadio" value="" checked={sortDirection === 2} onChange={() => { setSortDirection(2) }} />Top to Bottom (takes a while)
                </li>
                </ul>
            </div>
            <div className="input-container-item">

                Sort By:
            <ul >
                    <li>
                        <label className="radio">
                            <input type='radio' name="SortByRadio" />Hue
                    </label>
                    </li>
                    <li>
                        <label className="radio">
                            <input type='radio' name="SortByRadio" disabled />Proximity
                    </label>
                    </li>
                    <li>
                        <label className="radio">

                            <input type='radio' name="SortByRadio" disabled />RGB
                    </label>
                    </li>
                </ul>
            </div>
            <p>Sort speed:{100 - sortSpeed}</p>
            <div className="input-container-item">
                <input type="range" min="0" max="100" value={100 - sortSpeed} onChange={(e) => {
                    console.log(100 - e.target.value);
                    setSortSpeed(100 - e.target.value);
                    if (isSortRunning) {
                        CancelSort(setSortRunning);
                        StartSort();
                    }
                }} />
            </div>
            <div className="button-container">
                <Button variant="success" className='btn-block' onClick={StartSort}>Sort Image</Button>
                {isSortRunning ? (
                    <div>
                        <Button style={{ width: '50%' }} onClick={() => CancelSort(setSortRunning)}>Cancel</Button>
                        <Button style={{ width: '50%' }} onClick={() => CancelSort(setSortRunning)}>Skip</Button>
                    </div>
                ) : (<></>)}
                <Button variant="warning" className='btn-block' onClick={() => RandomizeCanvas(canvasRef)}>Randomize Canvas</Button>
                <Button disabled variant='outline-primary' className='btn-block'>Upload Image</Button>
            </div>

        </div>
    );
}
