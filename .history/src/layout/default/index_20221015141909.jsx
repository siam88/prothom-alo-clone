import React from 'react'
import ProthomAlo from '../../components/atoms/icons/prothomAlo'

const DefaultLayout = (props) => {
  return (
    <>
        <div >
         
          <ProthomAlo styles={{background:"red",display:"block",margin:"auto"}}/>
        </div>
        {props.children}
    </>
  )
}

export default DefaultLayout