import React, { useState } from 'react';

//create your first component
const TrafficLights = () => {
    const [toggleGreen, setGreen] = useState("bg-opacity-100")
    const [toggleYellow, setYellow] = useState("bg-opacity-25")
    const [toggleRed, setRed] = useState("bg-opacity-25")
    const [toggleBlue, setBlue] = useState("bg-opacity-25")

    const [toggleExtra, setExtra] = useState("d-none")
    const [addRemoveExtra, setAddRemoveExtra] = useState("Agregar Extra")
    
    const trLiCo = ['green', 'yellow', 'red', 'blue']

    //Encendemos el color que se nos pase por parámetro y apagamos los demás
    function activeColor(color, opt) {
        if ((opt == "colorclick" && color == "green") || (opt == "buttonclick" && toggleBlue == "bg-opacity-100")){
            setGreen('bg-opacity-100')
            setYellow('bg-opacity-25')
            setRed('bg-opacity-25')
            setBlue('bg-opacity-25')}
        else if((opt == "colorclick" && color == "yellow") || (opt == "buttonclick" && toggleGreen == "bg-opacity-100")){
            setYellow('bg-opacity-100')
            setGreen('bg-opacity-25')
            setRed('bg-opacity-25')
            setBlue('bg-opacity-25')}
        else if((opt == "colorclick" && color == "red") || (opt == "buttonclick" && toggleYellow == "bg-opacity-100")){
                setRed('bg-opacity-100')
                setYellow('bg-opacity-25')
                setGreen('bg-opacity-25')
                setBlue('bg-opacity-25')}
        else if((opt == "colorclick" && color == "blue") || (opt == "buttonclick" && toggleRed == "bg-opacity-100")){
            if (toggleExtra != "d-none") {
                setBlue('bg-opacity-100')
                setRed('bg-opacity-25')
                setYellow('bg-opacity-25')
                setGreen('bg-opacity-25')
            } else {
                setGreen('bg-opacity-100')
                setRed('bg-opacity-25')
                setYellow('bg-opacity-25')
                setBlue('bg-opacity-25')
            }
        }
    }

    function extraColor() {
        if (toggleExtra == "d-none") {
            setExtra("d-block")
        } else {
            setExtra("d-none")
            setGreen("bg-opacity-100")
            setBlue("bg-opacity-25")
        }
        addRemoveExtra == "Quitar Extra" ?  setAddRemoveExtra("Agregar Extra") : setAddRemoveExtra("Quitar Extra")
    }

	return (
        <div className="container d-flex justify-content-center flex-column">
            <div className="container vh-100 text-center" style={{width: "8rem"}}>
            <div className="container d-flex justify-content-center"><div class="bg-dark py-5" style={{width: "15px"}}></div></div>
                <div className="card bg-dark h-50">
                    <div className="card-body d-flex justify-content-center align-items-center flex-column" style={{padding: "0"}}>
                            <button onClick={() => activeColor(trLiCo[0], 'colorclick')} className={"bg-success d-block my-1 w-75 h-25 rounded-circle border-0 "+toggleGreen}/>
                            <button onClick={() => activeColor(trLiCo[1], 'colorclick')} className={"bg-danger d-block my-1 w-75 h-25 rounded-circle border-0 "+toggleYellow}/>
                            <button onClick={() => activeColor(trLiCo[2], 'colorclick')} className={"bg-warning d-block my-1 w-75 h-25 rounded-circle border-0 "+toggleRed}/>
                            <button onClick={() => activeColor(trLiCo[3], 'colorclick')} className={"bg-primary "+toggleExtra+" my-1 w-75 h-25 rounded-circle border-0 "+toggleBlue}/>
                    </div>
                </div>
                <button type="button" onClick={() => activeColor('', 'buttonclick')} className="btn btn-primary mt-3">Cambiar Color</button>
                <button type="button" onClick={extraColor} className="btn btn-primary mt-3">{addRemoveExtra}</button>
            </div>
        </div>
	);
};

export default TrafficLights;
