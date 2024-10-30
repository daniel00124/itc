
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Source(props) {
  const [newSource, setNewSource] = useState("");

  const handleSelectChange = (event) => {
    const selectedId = parseInt(event.target.value, 10);
    props.updateSource(selectedId);
  };

  const handleAddSource = () => {
    if (newSource) {
      props.addSource(newSource); 
      setNewSource(""); 
    }
  };

  return (
    <div className='source'>
      <label className='source-label'>Source</label>
      <select id='source' onChange={handleSelectChange}>
        <option value="0">Select Source</option>
        {props.data.map((d) => (
          <option key={d.id} value={d.id}>
            {d.url}
          </option>
        ))}
      </select>
      <div className='add-source'>
        <label className='add-source-label'>Add Source:</label>
        <input
          type="text"
          placeholder='rtsp link'
          value={newSource}
          onChange={(e) => setNewSource(e.target.value)}
        />
        <button onClick={handleAddSource}>
          <i className="bi bi-play-fill"></i> Play
        </button>
      </div>
    </div>
  );
}




