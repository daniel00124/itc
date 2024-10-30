
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import StreamList from './components/StreamList';

function App() {
  const [data, setData] = useState([]);
  const [currentSource, setCurrentSource] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const deleteStream = (id) => {
    axios
      .delete(`http://127.0.0.1:8000/${id}`)
      .then((res) => {
        setData(data.filter((d) => d.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const updateSource = (id) => {
    setCurrentSource(data.find((d) => d.id === id) || null);
  };
  const addSource = (url) => {
    axios
      .post('http://127.0.0.1:8000', { url,packet_count:10 })
      .then((res) => {
        setData([...data, res.data]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getData = async () => {
    try {
      const res = await axios.get('http://127.0.0.1:8000');
      setData(res.data);
      if (res.data.length > 0) setCurrentSource(res.data[0]); 
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Dashboard addSource={addSource} data={data} updateSource={updateSource} currentSource={currentSource} />}
          />
          <Route path='stream' element={<StreamList data={data} deleteStream={deleteStream} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



