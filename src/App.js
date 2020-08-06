import React,{useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';

const gitHubUrl = "https://jsonplaceholder.typicode.com/comments?postId=1";

function App() {
  //userData is an object initialized to empty objecta nd setUserData is update function for userData object.
  const [userData, setUserData] = useState([])

  //causes side effect after the component renders, its called after each render function and component update. Having an empty array prevents it being called after each render
  useEffect(()=>{
    gitHubAxiosGetUserData()
  },[])
  
  //async function helps runs js code in synchronous thread, while returning a promise
  //the fetch function does a network request to fetch the url and return a Promise that resolves into an response object, which is parsed using json()
  const gitHubAxiosGetUserData =async()=>{
    const response = await axios.get(gitHubUrl);
    setUserData(response.data)
  }

  return(
    <div>
      <header>Github User data</header>
      <div>
        <ul>
            {userData.map((listValue)=>{
              return (
              <div>
                <li><strong><u>{(listValue).name}</u></strong></li>
                <p>{(listValue).email}</p>
                <p>{(listValue).body}</p>
              </div>
                      )
            })}
        </ul>
      </div>
    </div>
  )
}

export default App;
