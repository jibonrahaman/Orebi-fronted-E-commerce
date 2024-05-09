import React from 'react'

export default function PageHeading({text,className}) {
  return (
    <h2 className={`pt-20 text-3xl font-bold ${className}`}>{text}</h2>
  )
}
