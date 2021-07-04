import React, {useEffect, useState} from 'react';
import './App.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideose] = useState([])
  

  useEffect(()=>{
    console.log('effect입니다.')
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM", requestOptions)
      .then(response => response.json())
      .then(result => setVideose(result.items))
      .catch(error => console.log('error', error));
  },[])

  return (
   <VideoList videos={videos} />
  );
}

export default App;
