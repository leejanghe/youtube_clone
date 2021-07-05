class Youtube {
    constructor(key){
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }
    async mostPopular(){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM&key=${this.key}`,
        this.RequestOptions);
    const result = await response.json();
    return result.items;


    // mostPopular(){
    //     return fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM&key=${this.key}`, 
    //     this.RequestOptions)
    //     .then(response => response.json())
    //     .then(result => result.items)
    //     }
    }
    
    async search(query){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM&key=${this.key}`,
        this.RequestOptions);
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;