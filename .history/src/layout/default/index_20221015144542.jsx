import React from 'react'
import ProthomAlo from '../../components/atoms/icons/prothomAlo'
import '../../assets/styles/style.scss'

const DefaultLayout = (props) => {
  return (
    <>
        <div className='details_header'>
          <div className='icon'>
          <ProthomAlo />
          </div>
        </div>
        <div>
        {props.children}
        </div>
      
    </>
  )
}

export default DefaultLayout