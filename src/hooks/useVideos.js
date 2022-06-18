import { useEffect, useState } from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    serachVideos(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const serachVideos = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });
    setVideos(data.items);
  };

  return [videos, serachVideos];
};

export default useVideos;
