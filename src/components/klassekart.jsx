import klasseinfo from "./data/klasseinfo"
import Elev from "./Elev"
import { useEffect } from "react"
import './css/klassekart.css'

export default function Klassekart() {


    return (
        <div className="container">
          <div className="klasse">
            
            {/* Left side of the classroom */}
            <div className='leftside'>
              <div className='box'>
                {klasseinfo["2ITB"].slice(0, 3).map((group, groupIndex) => (
                  <div className='sitteplasser' key={groupIndex}>
                    {group.map(student => (
                      <Elev key={student.id} id={student.id} name={student.name}/>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Right side of the classroom */}
            <div className='rightside'>
              <div className='box'>
                {klasseinfo["2ITB"].slice(3).map((group, groupIndex) => (
                  <div className='sitteplasser' key={groupIndex}>
                    {group.map(student => (
                      <Elev key={student.id} id={student.id} name={student.name}/>
                    ))}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Teacher's seat */}
          <div className='learer'> 
            <Elev name="Joakim"/>
          </div>

        </div>
    )
}
