import React from 'react'

import { GrAddCircle, GrSubtractCircle } from 'react-icons/gr'

const SingleAccordionItem = ({
  question,
  answer,
  selected,
  toggleSelected,
  id,
}) => {
  return (
    <>
      <div>
        <h3>{question}</h3>
        {id === selected}
        <GrAddCircle />
      </div>
    </>
  )
}

export default SingleAccordionItem
