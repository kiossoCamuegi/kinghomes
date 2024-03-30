import React from 'react'

function ReduceTextLength(props) {

  const Reduce = (e)=>{
    return (e.length <= props.length*1 ? e : e.substring(0, props.length*1)+  (props.nodot ? "" : " ..."));
  }

  return (
    <>{Reduce(props.text)}</>
  )
}

export default ReduceTextLength