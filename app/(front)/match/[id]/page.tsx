import React from 'react'

type PageParams = {
  params: {
    id: string
  }
};

const page = ({params}: PageParams) => {
  return (
    <div>{params.id}</div>
  )
}

export default page