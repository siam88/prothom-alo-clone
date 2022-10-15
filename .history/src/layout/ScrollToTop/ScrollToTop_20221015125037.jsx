import React,{useEffect} from 'react'

const ScrollToTop = (props) => {
  useEffect(() => {
    const unListen=props.history.listen(()=>{
        window.scrollTo(0,0)
    })
    return () => {
      second
    }
  })
  
}

export default ScrollToTop