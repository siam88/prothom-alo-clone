import React from 'react'
import ProthomAlo from '../../components/atoms/icons/prothomAlo'
import ProthomAlo3 from '../../assets/icons/prothomAloLogo.svg'
const DefaultLayout = (props) => {
  return (
    <>
        <div>
          <img src={ProthomAlo3} alt="logo"/>
        </div>
        {props.children}
    </>
  )
}

export default DefaultLayout