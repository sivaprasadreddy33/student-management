import { useEffect, useState } from "react";

import axios from "axios";

function useFetchData(url) {

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {

    let isActive = true;

    async function getData() {

      try {

        setLoading(true);

        setError("");

        const response = await axios.get(url);

        if (isActive) {

          setData(response.data);

        }

      } catch (err) {

        if (isActive) {

          setError("Unable to fetch student details.");

        }

      } finally {

        if (isActive) {

          setLoading(false);

        }

      }

    }

    getData();

    return () => {

      isActive = false;

    };

  }, [url]);

  return {

    data,

    loading,

    error

  };

}

export default useFetchData;