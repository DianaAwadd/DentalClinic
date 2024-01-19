import React ,{useState} from "react"
import { useNavigate} from 'react-router-dom';
import './Choos.css'
export const Choos = (props) => {
 
  const[CityType,setCityType]=useState();
      const handleCityTypeChange = (e) => {
        setCityType(e.target.value);
      };


      const navigate = useNavigate(); 
      const homeChange = () =>{ 
         navigate('/Admin/routes');
        }

  return (
    
    <div className="auth-form-container">
      <h2>Choose Your Location</h2>
    
      <label className="select-city">City:
        <select value={CityType} onChange={handleCityTypeChange}>
          <option value="">Choose City</option>
          <option value=" Damascus ">Damascus </option>
          <option value=" Damascus_suburb">Damascus Suburb </option>
          <option value=" Daraa">Daraa </option>
          <option value=" Aleppo"> Aleppo </option>
          <option value=" Hama">Hama </option>
          <option value=" Homs">Homs </option>
        </select>
      </label>

      <label className="select-place">Place :
        <select value={CityType} onChange={handleCityTypeChange}>
          <option value="">Choose Place</option>
          <option value=" Mojtahed ">Mojtahed </option>
          <option value=" Baramka">Baramka </option>
          <option value=" Fahama">Fahama </option>
          <option value=" Kafersouseh">Kafersouseh </option>
          <option value=" Mohajereen">Mohajereen </option>
          <option value=" Malki">Malki </option>
          <option value=" Zaherah">Zaherah </option>
          <option value=" Rawdah">Rawdah </option>
          <option value=" Qumhaneh">Qumhaneh </option>
          <option value=" Mourek">Mourek </option>
          <option value=" Hama city">Hama city </option>
        </select>
      </label>
      <button onClick={homeChange}>Next</button>
   
    </div>
    
  )
}

