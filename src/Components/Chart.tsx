import React, {useEffect, useRef} from 'react';

const wrapper1: any = {
    width: `500px`,
    display: 'flex',

}
function ChartElement(props: any) {
    const width = 500;
    const varible2 = width - props.props.time;
    const varible3 = width - varible2;

    const chartFieldOne = {
        width: `${varible3}px`,
        height: `20px`,
        backgroundColor: `red`,
    }
    const chartFieldTwo = {
        width: `${varible2}px`,
        height: `20px`,
        backgroundColor: `blue`,
    }
    const time: any = {
        position: 'fixed',
        color:'#ffffff'
    }

    return (
        <div>
            <div style={wrapper1}>
                <div style={chartFieldOne}>
                    <div style={time}>{props.props.time} sec</div>
                </div>
                <div style={chartFieldTwo}></div>
            </div>
        </div>
    )

}

export default ChartElement;
