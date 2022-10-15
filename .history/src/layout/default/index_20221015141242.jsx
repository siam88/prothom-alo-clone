import React from 'react'
import prothomAlo from '../../components/atoms/icons/prothomAlo'
const DefaultLayout = (props) => {
  return (
    <>
        <div>
          <img src={prothomAlo}/>
        </div>
        {props.children}
    </>
  )
}

export default DefaultLayout