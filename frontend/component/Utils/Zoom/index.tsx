import *as React from "react";
import { useEffect, useState } from "react";
import { Props, Position } from "./Types";

export function Zoom({ image }: Props) {

  const [origin, setOrigin] = useState<Position>({
    x: 0,
    y: 0,
    width: 1222,
    height: 1222
  });

  const [destination, setDestination] = useState<Position>({
    x: 0,
    y: 0,
    width: 500,
    height: 500
  });

  useEffect(() => {
    document.addEventListener('wheel',zoom)


    return ()=>{
      document.removeEventListener('wheel',zoom)
    }
  },[])

  useEffect(() => {
    const canvas: any = document.getElementById("canvas");
    const ctx: any = canvas.getContext("2d");
    const image = document.getElementById("video");

    // ctx.fillStyle = "white";
    ctx.fillStyle = "green";

    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(
      image,
      origin.x,
      origin.y,
      origin.width,
      origin.height,
      destination.x,
      destination.y,
      destination.width,
      destination.height
    );
  }, [image,origin, destination]);

  const reset = ()=>{

    const canvas:any = document.getElementById('canvas')

    setOrigin(o=>{return{
      x:0,
      y:0,
      width:canvas.width,
      height:canvas.height
    }})
  }

  const zoom = (e:any)=>{

    // e.PreventDefault

    const canvas:any = document.getElementById('canvas')

    const change = canvas.width/5

    if(e.deltaY >0){
      // up

      setOrigin(o=>{

        return { 
          x: o.x,
          y: o.y,
          width:o.width+change,
          height:o.height+change
        }
      })

    }else if(e.deltaY<0){
      // down
      setOrigin(o=>{
      

        return { 
          x: o.x,
          y: o.y,
          width:o.width-change,
          height:o.height-change
        }
      })

    }
  }

  const changeDim = (e: any) => {
    const id = e.target.id;

    setOrigin((o) => {

      let value = e.target.value
      let ratio = o.width / o.height;

      let width = o.width
      let height = o.height;

      if(id=="width" ){
        width = value
        height = width / ratio
      }else if(id=="height"){
        height = value
        width = height * ratio
      }

      return {
        x: id === "x" ? value : o.x,
        y: id === "y" ? value : o.y,
        width,
        height
      };
    });
  };

  const changeDest = (e: any) => {
    const id = e.target.id;

    setDestination((o) => {

      let value = e.target.value
      let ratio = o.width / o.height;

      let width = o.width
      let height = o.height;

      if(id=="width" ){
        width = value
        height = width / ratio
      }else if(id=="height"){
        height = value
        width = height * ratio
      }

      return {
        x: id === "x" ? value : o.x,
        y: id === "y" ? value : o.y,
        width,
        height
      };
    });
  };

  return (
    <div className="video-player">

      <div className="outsideWrapper">
        <img id="video" hidden src={image} alt="" />
        <canvas
          width="500"
          height="500"
          className="coveredImage"
          style={{ border: "1px solid black" }}
          id="canvas"
        ></canvas>
      </div>

      
      
      <ButtonList origin={origin} changeDim={changeDim} reset={reset} />
      {/* <ButtonList origin={destination} changeDim={changeDest} reset={reset} /> */}

    </div>
      
  );
}

function ButtonList({origin,changeDim,reset}){

  return <>
  <input
    id="y"
    value={origin.y}
    onChange={changeDim}
    // orient={'vertical'}
    type="range"
    min="0"
    max="1500"
  />

  <input
    id="x"
    value={origin.x}
    onChange={changeDim}
    type="range"
    min="0"
    max="1500"
  />

  <div className="info" >
    <label>x:{origin.x}</label>
    <label> y:{origin.y}</label>
    <label>width:{origin.width}</label>
    <label>height:{origin.height}</label>

       
        
        
  </div>

  <button onClick={reset} >reset</button>
</>

}