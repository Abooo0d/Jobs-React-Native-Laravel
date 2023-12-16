import { useState, useEffect } from "react";
import axios from "axios";
// const useFetch = (endpoint, query) => {
const useFetch = (id) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const options = {
  //   method: "GET",
  //   url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  //   headers: {
  //     "X-RapidAPI-Key": "1115ef0c9dmsh091a4b497b0efecp1ec071jsnb668e0cce360",
  //     "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
  //   },
  //   params: { ...query },
  // };
  // const fetchData = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await axiosClient
  //       .get("/jobs")
  //       .then((response) => {
  //         setData(response), setIsLoading(false);
  //       })
  //       .catch((error) => {
  //         setError(error);
  //         setIsLoading(false);
  //       });
  //     setData(response.data.data);
  //     setIsLoading(false);
  //   } catch (error) {
  //     setError(error);
  //     alert(error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };
  const fetchData = async (id) => {
    setIsLoading(true);
    let response;
    if (id === undefined) {
      response = axios.get("http://192.168.1.107:8000/api/jobs");
    } else {
      response = axios.get(`http://192.168.1.107:8000/api/jobs/${id}/details`);
    }
    response
      .then(({ data }) => {
        setData(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const refetch = () => {
    fetchData();
  };
  return { data, isLoading, error, refetch };
};
export default useFetch;
