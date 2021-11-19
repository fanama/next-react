import {Headder} from '../component/Headder'
import {Main} from '../component/main'
import {useEffect} from 'react'
import Router from 'next/router'

function HomePage() {

    useEffect(() => {

        console.log("main")

        const token = localStorage.getItem("token")
        console.log({token})

        if(token==null||token==""){
            console.log("vide!!!")
            Router.push("/")
        }
    }, [])

    return <div style={{margin:'none'}}>
          <Headder />
          <Main/>
      </div>
  }
  
  export default HomePage