import { useNavigate } from 'react-router-dom';
import './css/elev.css';

export default function Elev(props) {

    let id = props.id;
    let name = props.name;

    let navigate = useNavigate()

    function clickFunction() {
        let path = '/'+id;
        navigate(path)
    }
    
    return (

            <div className='elev' onClick={clickFunction}> {name} </div>

    )
}