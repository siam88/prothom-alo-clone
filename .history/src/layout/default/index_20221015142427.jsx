import React from 'react'
import ProthomAlo from '../../components/atoms/icons/prothomAlo'
import '../../assets/styles/style.scss'

const DefaultLayout = (props) => {
  return (
    <>
        <div >
         
          <ProthomAlo />
        </div>
        {props.children}
    </>
  )
}

export default DefaultLayout