import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch4";

type Video = {
  title: string;
  thumbnail: string;
  views: number;
  likes: number;
};
const PlayList = () => {
  const [videos, setVideos] = useState<Video[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/videos")) as {
        status: number;
        message: string;
        data: any;
      };
      const { status, message, data } = res;
      if (status === 200 && message === "Success") {
        setVideos(data.videos);
      }
    } catch (err: any) {
      console.error("Error during fetching products", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = () => {
    setVideos((prev) => (prev ? prev.slice(1) : null));
  };

  if (loading) return <div>Loading...</div>;
  if (!videos) return <div>No videos found.</div>;

  return (
    <div style={{ border: "1px solid #ccc" }}>
      <div
        style={{
          padding: "20px",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {videos.map(({ title, thumbnail, views, likes }, index) => {
          return (
            <div key={index} style={{ border: "1px solid #ccc" }}>
              <img src={thumbnail} alt={title} />
              <p style={{ lineHeight: "0.1" }}>
                <b>{title}</b>
              </p>
              <br />
              <p style={{ lineHeight: "0.2" }}>
                <b>Likes: </b>
                {likes}
              </p>
              <p style={{ lineHeight: "0.2" }}>
                <b>Views: </b>
                {views}
              </p>
            </div>
          );
        })}
      </div>
      <button onClick={handleDelete}>Delete video</button>
    </div>
  );
};

export default PlayList;
