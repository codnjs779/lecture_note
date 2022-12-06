import React from 'react';
import {useParams} from "react-router-dom"
import {useQuery} from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import FakeYoutube, {search} from "../api/youtube";

const Videos = () => {
    const {keyword} = useParams();
    const { isLoading, error, data:videos } = useQuery(
        ['video', keyword], () => {
            const youtube = new FakeYoutube();
            return youtube.search(keyword);
        });
    return (
        <div>
            {/*키워드가 있을 때와 없을 때 나누는 분기 */}
            {keyword ? `${keyword}` : 'hot' }
            {isLoading && <p>Loading...</p>}
            {error && <p>Something isi wrong </p>}
            {videos && (
                <ul>
                    {videos.map((video) => (
                        <VideoCard key={video.id}
                                    video={video}
                        />))}
                </ul>
                )
              }
        </div>
    );
};

export default Videos;