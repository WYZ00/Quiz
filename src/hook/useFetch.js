import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
  const [loader, setLoader] = useState(true);
  const [quiz, setQuiz] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/api/quiz").then((response) => {
      const data = response.data;
      setQuiz(data);
      setLoader(false);
    });
  }, []);
  return { loader, quiz };
};

export default useFetch;
