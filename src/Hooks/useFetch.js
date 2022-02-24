import { useState, useEffect} from "react"

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  
  // FETCH USER REVIEWS
  useEffect (() => {
      fetch (url)
        .then (res => {
          if(!res.ok) {
            throw Error ("Response fetch error");
          }
          return res.json();
        }).then (data => {
          setData(data);
          setIsLoading(false);
          setError(null);
        }).catch(error => {
          console.log("errorčina!\n" + error);
          setIsLoading(false);
          setError(error);
        })
    },[url])

  return { data, isLoading, error }
}

export default useFetch