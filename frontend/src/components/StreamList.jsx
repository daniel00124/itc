import React from 'react'

export default function StreamList(props) {
  return (
    <div className='stream-list'>
        <h1>Stream List</h1>
        <ul>
            {props.data.map((d) => {
                return (
                    <li key={d.id}>
                        <p>url:{d.url}</p>
                        <p>packet_count:{d.packet_count}</p>
                        <p>packet_loss:{d.packet_loss}</p>
                        <p>status:{d.status}</p>
                        <p>created_at:{d.created_at}</p>
                        <p>updated_at:{d.updated_at}</p>
                        <button onClick={() => props.deleteStream(d.id)}>Delete</button>

                    </li>
                )
            })}
        </ul>
                    
    </div>
  )
}
