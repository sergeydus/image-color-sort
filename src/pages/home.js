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
    // const [sortType, setSortType] = useState(BubbleSort);
    return (
        <div>
            <Container>
                <Row>

                </Row>
                <Row>
                    <Col sm={12} md={8}>
                        <canvas ref={canvasRef} height={450} width={450}></canvas>
                    </Col>
                    <Col sm={12} md={4}>
                        <SortTypeSelector canvasRef={canvasRef} />
                    </Col>

                </Row>
            </Container>
        </div>
    );
}




export default Home;
