import React from 'react'
import img from '../images/logo.png'
import img2 from '../images/logo2.png'
import Suorce from './Suorce'
import Metrics from './Metrics'
import { Link } from 'react-router-dom';
export default function Dashboard(props) {
  return (
    <div className='dashboard'>
        <div className='blue-section'>
        <img src={img2} alt="logo"/>
        </div>
        <div className='main-section'>
            <div className='header' > 
                <h1>RTSP Monitoring</h1>
                <img src={img} alt="logo"/>
            </div>
            <Link to='/stream'>Stream List</Link>
            <Suorce addSource={props.addSource} data={props.data} updateSource={props.updateSource}/>
            <Metrics data={props.data} currentSource={props.currentSource}/>
        </div>
    </div>
  )
}


