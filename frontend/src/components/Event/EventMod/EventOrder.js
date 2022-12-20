import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import {HTML5Backend} from 'react-dnd-html5-backend'

import {TouchBackend} from 'react-dnd-touch-backend'
import {DndProvider} from 'react-dnd'
import Container from '../../utils/drag-drop-sortable-list/Container'


const EventOrder = (props) => {

    function getBackend() {
        return detectMob() ? TouchBackend : HTML5Backend;
    }

    function detectMob() {
        return ((window.innerWidth <= 800) || (window.innerHeight <= 600));
    }

    const isMobile = detectMob()

    console.log("is Mobile false : " + isMobile)
    return (
        <div key={props.event._id}>
            <DndProvider backend={getBackend()}>
                <Container event={props.event}/>
            </DndProvider>
        </div>
    )

}

export default EventOrder;