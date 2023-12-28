import React from 'react'

const ReviewDetails = ({params}) => {
  return (
    <div className='ReviewDetails'>
        <h1>Review {params.reviewId} for product {params.productId} </h1>
    </div>
  )
}

export default ReviewDetails;