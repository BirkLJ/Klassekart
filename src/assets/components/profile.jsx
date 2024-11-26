import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import './css/elev.css'

import Klasseinfo from './data/Klasseinfo';


export default function Profile() {

    let { profile } = useParams();
    console.log(profile);
    
    let navigate = useNavigate()

    function goHome() {
        navigate('/')
    }

    return (
        <>
        <h1> Navn </h1>
        
        <button onClick={goHome}>Home</button>
        </>
        
    )
}