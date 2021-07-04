import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({video:{snippet}}) => ( //props.video.snippet 반복되니까 걍 구조분해할당함
            <div className={styles.container}>
            <li className={styles.video}>
                <img className={styles.thumbnails} src={snippet.thumbnails.medium.url} 
                alt="video thumbnail"
                />
                <div className={styles.metadata}>
                    <p className={styles.title}>{snippet.title}</p>
                    <p className={styles.channel}>{snippet.channelTitle}</p>
                </div>
            </li>
            </div>

    );

export default VideoItem;