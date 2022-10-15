import React from 'react'
import ProthomAlo from '../../components/atoms/icons/prothomAlo'
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