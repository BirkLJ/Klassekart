import { useNavigate } from 'react-router-dom';
import './css/bord.css';

export default function Bord(props) {

    let name = props.name;
    let id = props.id;
    let navigate = useNavigate()

    function clickFunction() {
        let path = '/'+id;
        navigate(path)
    }
    
    return (

            <div className='elev' onClick={clickFunction}> {name} </div>

    )
}