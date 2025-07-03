import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch9";

type Video = {
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
};
const VideoLabel = () => {
  const [videoData, setVideoData] = useState<Video | null>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/getvideo")) as {
        status: number;
        message: string;
        data: any;
      };
      const { status, data } = res;

      if (status === 200) {
        setVideoData(data.videos);
        console.log(data.videos);
      }
    } catch (e) {
      console.error("Error fetching profile data:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!videoData) {
    return <p>Video not available!</p>;
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "20px" }}>
      <img src={videoData.thumbnail} alt="" />
      <p>
        <b>{videoData.title}</b>
        <br />
        <b>Views: </b>
        {videoData.views}
        <br />
        <b>Likes:</b>
        {videoData.likes}
        <br />
        {label && (
          <span>
            <b>Label:</b> {label}
          </span>
        )}
      </p>

      <button
        disabled={label ? true : false}
        onClick={() => {
          setLabel("Self Motivational");
        }}
      >
        Add a Label
      </button>
    </div>
  );
};

export default VideoLabel;
