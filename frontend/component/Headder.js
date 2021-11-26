import Router from 'next/router'

const navbar = {
    width:"100%",
    textAlign:"center",
    backgroundColor:'rgba(0,0,0,0.1)'
}

export function Headder() {

    const deconexion = ()=> {
        localStorage.clear()
        Router.push("/")
    }


    return <div style={navbar}>
        <h1>mon titre</h1> 
        <button onClick={deconexion} >deconexion</button>
    </div>
}