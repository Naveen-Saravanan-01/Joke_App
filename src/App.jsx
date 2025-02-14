import { useState, useEffect } from "react";
import './App.css'

const App = () => {
  const [joke, setJoke] = useState("");

  const [loading,setLoading]=useState(false)

  const fetchJoke = async () => {
    setLoading(true)


    try {
      const response = await fetch("https://joke-app-021d.onrender.com/"); // Fetch from our backend API
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }finally{
      setLoading(false)
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (

    <div className="app">
    <div className="joke-container" >
      <h1>Random Joke Generator</h1>

      {loading?

      (<div className="loading">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>) :





      (<div className="joke">
        <p>{joke || "Loading joke..."}</p>
     
      <button onClick={fetchJoke}>Get New Joke</button>
      </div>
    )
    
  }
    </div>

    </div>
  );
};

export default App;