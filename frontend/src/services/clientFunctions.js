import { useEffect, useState } from "react";
import { client } from "../client";

export const FetchSection = (query) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    client.fetch(query).then((response) => {
      setData(response);
      setLoading(false);
    });
  }, [query]);

  return [loading, data];
};
