import React from 'react'

const SectionHeading = (props:any) => {
  return (
    <div>
        <span className="text-[#272343] text-[26px]  font-semibold leading-[48px]">
          {props.head}
        </span>
    </div>
  )
}

export default SectionHeading