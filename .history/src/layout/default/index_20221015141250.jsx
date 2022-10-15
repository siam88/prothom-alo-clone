import React from 'react'
import prothomAlo from '../../components/atoms/icons/prothomAlo'
const DefaultLayout = (props) => {
  return (
    <>
        <div>
          <img src={prothomAlo} alt="logo"/>
        </div>
        {props.children}
    </>
  )
}

export default DefaultLayout