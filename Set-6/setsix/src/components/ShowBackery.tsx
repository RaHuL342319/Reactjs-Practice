import { useEffect, useState } from "react";
import { fakeFetch } from "../api/fakeFetch5";

type Post = {
  caption: string;
  src: string;
  views: number;
  likes: number;
  category: string;
};
const ShowBackery = () => {
  const [videos, setVideos] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const res = (await fakeFetch("https://example.com/api/posts")) as {
        status: number;
        message: string;
        data: any;
      };
      const { status, message, data } = res;
      if (status === 200 && message === "Success") {
        setVideos(data.posts);
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

  const handleFilter = () => {
    setVideos((prev) =>
      prev ? prev?.filter((item) => item.category === "Bakery") : null
    );
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
        {videos.map(({ caption, src, views, likes }, index) => {
          return (
            <div key={index} style={{ border: "1px solid #ccc" }}>
              <img src={src} alt={caption} />
              <p style={{ lineHeight: "0.1" }}>
                <b>{caption}</b>
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
      <button onClick={handleFilter}>Show backery</button>
    </div>
  );
};

export default ShowBackery;
