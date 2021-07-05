import React, {useEffect, useState} from 'react';
import styles from'./app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideose] = useState([])
  const search = query =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM`, requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item ,id:item.id.videoId})))
      .then(items => setVideose(items))
      .catch(error => console.log('error', error));
  }

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
    <div className={styles.app}>
    <SearchHeader onSearch={search} />
    <VideoList videos={videos} />
   </div>
  );
}

export default App;
