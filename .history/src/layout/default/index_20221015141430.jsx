import React from 'react'
import ProthomAlo from '../../components/atoms/icons/prothomAlo'
import ProthomAlo from '../../assets/icons/prothomAloLogo.svg'
const DefaultLayout = (props) => {
  return (
    <>
        <div>
          <img src={ProthomAlo} alt="logo"/>
        </div>
        {props.children}
    </>
  )
}

export default DefaultLayout