import React from 'react'
import ProthomAlo from '../../components/atoms/icons/prothomAlo'

const DefaultLayout = (props) => {
  return (
    <>
        <div style={{background:"red"}}>
         
          <ProthomAlo />
        </div>
        {props.children}
    </>
  )
}

export default DefaultLayout