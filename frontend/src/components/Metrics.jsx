

import React from 'react';
import graph from '../images/graph.png';

export default function Metrics(props) {
  // Check if currentSource is available
  if (!props.currentSource) {
    return <div>Loading...</div>; // Show a loading message or a fallback component
  }

  return (
    <div className='metrics'>
      <div className='cubes'>
        <div className={props.currentSource.status ? 'stats-active' : 'stats-inactive'}>
          <h2>Stats</h2>
          <p>Response from source</p>
          {props.currentSource.status ? (
            <h3 className='active'>ACTIVE</h3>
          ) : (
            <h3 className='inactive'>INACTIVE</h3>
          )}
        </div>
        <div className='count'>
          <h2>Packet Count</h2>
          <p>{props.currentSource.packet_count}</p>
        </div>
      </div>
      <div className='loss'>
        <h2>Packet Loss Percentage</h2>
        <img src={graph} alt="loss" />
      </div>
    </div>
  );
}

