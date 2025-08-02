import React from 'react'
import dynamic from 'next/dynamic';
const Technology = dynamic(() => import("../../pageComponents/Technology"));

const TechnologyPage = () => {
  return (
    <Technology />
  )
}

export default TechnologyPage