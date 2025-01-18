import React from 'react'

const New = (props:any) => {
  return (
    <div>
    <div>
        <span style={{backgroundColor: props.bg}} className=" w-5 h-5  text-[#FAFAFA] p-2 rounded">{props.text}</span>
    </div>
    </div>
  )
}

export default New