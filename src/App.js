import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'
import Description from './components/Description'
import Image from './components/Image'


function App() {
  
  const [data, setData] = useState(null)
  
  useEffect(() => {
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then((res) => {
        console.log(res);
        setData(res.data)
      })
  }, [])
  
  if (!data) return <h3>Loading....</h3>
  
  const { hdurl, title, date, explanation, copyright } = data

  return (
		<div className="App">
      
      <Image
        image={hdurl}
        title={title} />
			
      <Description
				date={date}
				explanation={explanation}
				copyright={copyright}
			/>
    
    </div>
    
	)
}


      

export default App;
