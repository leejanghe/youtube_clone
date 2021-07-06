import React, {useEffect, useState, useCallback} from 'react';
import styles from'./app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoDetail from './components/video_detail/video_detail';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null)



  const selectVideo = (video) =>{
    setSelectedVideo(video)
  }

  const search = useCallback(query =>{
    setSelectedVideo(null)
    youtube.search(query)//
    .then(videos => 
      setVideos(videos))

    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    //};
    
    // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM&key=${key}`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => result.items.map(item => ({...item ,id:item.id.videoId})))
    //   .then(items => setVideose(items))
    //   .catch(error => console.log('error', error));
  },[youtube])

  useEffect(()=>{
    youtube.mostPopular()//
    .then(videos => setVideos(videos))
    // console.log('effect입니다.')
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    
    // fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM&key=${key}", requestOptions)
    //   .then(response => response.json())
    //   .then(result => setVideose(result.items))
    //   .catch(error => console.log('error', error));
  },[])

  return (
    <div className={styles.app}>
    <SearchHeader onSearch={search} />
    <section className={styles.content}>
    {selectedVideo && (
    <div className={styles.detail}>
     <VideoDetail video={selectedVideo}/>
    </div>
    )}
    <div className={styles.list}>
    <VideoList 
    videos={videos} 
    onVideoClick={selectVideo} 
    display={selectedVideo ? 'list':'grid'}/>
    </div>
    </section>
   </div>
  );
}

export default App;
