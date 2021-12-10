import React, { useState } from 'react';
import data from '../metal.json';
import Band from './Band';
import './styles/MetalMeta.css';

function MetalMeta(props) {
    const [totalBands] = useState(data.length);

    const displayBands = () => {
        return data.map((data) => {
                return (
                    <Band bandData={data} key={data.ID} />
                )
            })
    }

    return (
        <div className="bandList">
            <h2>Bands : { totalBands }</h2>
            
            { displayBands() }
        </div>
    );
}

export default MetalMeta;