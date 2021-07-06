// axios로 한다면
// npm add 를 통해 추가
// 별차이는 없지만 제이슨을 알아서 변환해주고 URL과 params를 구분해서 가독성이 좋음
// 이전 브라우저 버전과 호환이 된다
// 거의 포스트맨이랑 형식이 비슷

class Youtube_axios {
    constructor(key){
        this.youtube = axios.create({
            baseURL:'https://youtube.googleapis.com/youtube/v3',
            params: {key:key},
        })
    }
    async mostPopular(){
    const response = await this.youtube.get('videos',{
        params:{
            part: 'snippet',
            chart: 'mostPoular',
            maxResults:25,
        },
    });
    return response.data.item;
}


    
    async search(query){
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyC9zKudUmIt8ffXIVgu6BjcTUS5mfO8YeM&key=${this.key}`,
        this.RequestOptions);
    const result = await response.json();
    return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default Youtube;