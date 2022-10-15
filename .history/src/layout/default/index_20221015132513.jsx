import React from 'react'

const DefaultLayout = (props) => {
  return (
    <>
        <p>Title</p>
        {props.children}
    </>
  )
}

export default DefaultLayout