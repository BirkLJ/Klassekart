import Klasseinfo from "./data/Klasseinfo";
import './css/klassekart.css';
import Bord from "./bord";

    export default function Klassekart(){
    
    return (
        <div className="container">

            <div className="leftside">
                <div className="row">
                    <Bord name="Sebastian" id="1"/>
                    <Bord name="Sindre" id="4"/>
                    <Bord name="Nora"   id=""/>
                </div>
                <div className="row">
                    <Bord name="Anders" id="2"/>
                    <Bord name="Sander" id="5"/>
                    <Bord name="Angelina" id="1"/>
                </div>
                <div className="row">
                    <Bord name="Mubashir"  id="3"/>
                    <Bord name="Sigurd"/>
                    <Bord name="Amanda"/>
                </div>
                
            </div>

            <div className="rightside">
            <div className="row">
                    <Bord name="Storm"/>
                    <Bord name="Yevhenii"/>
                    <Bord name="Jakob"/>
                </div>
                <div className="row">
                    <Bord name="Oskar"/>
                    <Bord name="Birk"/>
                    <Bord name="Jo Erlend"/>
                </div>
                
                </div>
          
        </div>

    
    )
}