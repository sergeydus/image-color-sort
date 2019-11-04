import React, { useRef, useState, useEffect } from 'react';
import './home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import SortTypeSelector from '../components/sort-type-selector';
import { SortByHue, SortByHueByRow, Sort, RandomizeCanvas, CancelSort, SortByHueByCol, InsertionSortByHueByRow, InsertionSortByHueByCol, InsertionSortByHue } from '../functions'
function Home() {
    const canvasRef = useRef(null);
    var colorArray = [];
    // const [sortType, setSortType] = useState(BubbleSort);
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
        <div>
            <Container>
                <Row>
                    <Col>
                        <Button onClick={StartSort}>Sort</Button>
                    </Col>
                    <Col>
                        <Button disabled={isSortRunning} onClick={() => console.log()}>
                            Sort by else
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={8}>
                        <canvas ref={canvasRef} height={150} width={150}></canvas>
                    </Col>
                    <SortTypeSelector setSortDirection={setSortDirection} SetSortAlgorithm={SetSortAlgorithm} sortDirection={sortDirection} sortAlgorithm={sortAlgorithm} />

                </Row>
                <Row>
                    <Col>
                        <Button onClick={() => {
                            RandomizeCanvas(canvasRef);
                            // // http://www.deepdiveintel.com/wp-content/uploads/2013/09/Owl-Eye-art-300x300.jpg
                            // var ctx = canvasRef.current.getContext('2d');
                            // var img = new Image();
                            // img.onload = function () {
                            //     ctx.drawImage(img, 0, 0); // Or at whatever offset you like
                            // };
                            // img.src = 'Owl-Eye-art-300x300.jpg';
                        }}>Randomize canvas</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <input type="range" min="0" max="100" value={100 - sortSpeed} onChange={(e) => {
                                console.log(100 - e.target.value);
                                setSortSpeed(100 - e.target.value);
                                if (isSortRunning) {
                                    CancelSort(setSortRunning);
                                    StartSort();
                                }
                            }} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {isSortRunning ? (<Button onClick={() => CancelSort(setSortRunning)}>Cancel Sort</Button>) : (<></>)}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}




export default Home;
