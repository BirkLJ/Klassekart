import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './css/profile.css'
import dummyimage from './images/dummy-profile-pic.jpg'
import klasseinfo from "./data/klasseinfo"

export default function Profile() {
    
    let { profile } = useParams();

    const [profilestats, setProfilestats] = useState('');

   let navigate = useNavigate();

   useEffect(() => {

    klasseinfo['2ITB'].map((row, index) => {
        row.map((row2, index2) => {
            if (row2.id == profile) {
                setProfilestats(row2);
            }
        })
    })
    console.log(profilestats)
   })

    function goHome() {
        navigate('/')
    }

    return (
        <>
        <div className='container-profile'>
            <h1> V </h1>
            <img src={dummyimage} alt='Dummy image'/>
            <button onClick={goHome}>Tilbake til klassekartet</button>
        </div>
            
        </>
        
    )
}
