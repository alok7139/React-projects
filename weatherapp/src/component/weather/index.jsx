import { useEffect, useState } from "react";
import Search from "../search";



export default function Weather(){
    const [search, setsearch] = useState('')
    const [loading, setloading] = useState(false)
    const [weatherdata, setweatherdata] = useState(null)

    const fetchWeather = async(param) => {
        setloading(true)
        try {
             const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=e34b4c51d8c2b7bf48d5217fe52ff79e`);

             const data = await response.json();
             console.log(data)
             if(data){
                
                setweatherdata(data)
                setloading(false)
             }
        } catch (error) {
            console.log(error)
        }
    }

    const handlesearch =  () => {
          fetchWeather(search);
    }

    const getCurrentdate = () => {
      return new Date().toLocaleDateString('en-us' , {
        weekday: 'long',
        month : 'long',
        day: 'numeric',
        year: 'numeric',
      })
    }

    useEffect(() => {
        fetchWeather('Mumbai')
    },[]);

    console.log(loading)



    return <div>
        <Search 
        search={search}
        setSearch={setsearch}
        handlesearch={handlesearch}
        />
        {
            loading ? <h2 className="loading">Loading...</h2> :
            <div>
                <div className="cityname">
                     <h2>{weatherdata?.name} <span>{weatherdata?.sys?.country}</span></h2>
                </div>
                <div className="date">
                    <span>{getCurrentdate()}</span>

                </div>
                <div className="temp">
                    {weatherdata?.main?.temp}</div>
                    <p className="description">{weatherdata && weatherdata.weather && weatherdata.weather[0] ? weatherdata.weather[0].description : ''}</p>
                    <div className="weather-info">
                        <div className="column">
                            <div>
                                <p className="wind">
                                    {weatherdata?.wind?.speed}
                                </p>
                                <p>Wind Speed</p>
                            </div>
                        </div>
                        <div className="column">
                            <div>
                                <p className="wind">
                                    {weatherdata?.main?.humidity}
                                    %
                                </p>
                                <p>Humidity</p>
                                </div>
                            </div>
                    </div>
                
            </div> 
        }
    </div>
} 