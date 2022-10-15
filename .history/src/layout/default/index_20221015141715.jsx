import React from 'react'
import ProthomAlo from '../../components/atoms/icons/prothomAlo'
const DefaultLayout = (props) => {
  return (
    <>
        <div>
          {/* <img src={ProthomAlo3} alt="logo"/> */}
          <ProthomAlo/>
        </div>
        {props.children}
    </>
  )
}

export default DefaultLayout