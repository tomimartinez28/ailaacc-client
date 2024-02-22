'use client'

import { Card } from 'flowbite-react'

export function ServiceCard ({ service }) {
  const { name, description, imgSrc } = service

  return (
    <Card
      className='max-w-sm h-[400px]'
      imgAlt='Meaningful alt text for an image that is not purely decorative'
      imgSrc={imgSrc}
    >
      <h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
        {name}
      </h5>
      <p className='font-normal text-gray-700 dark:text-gray-400'>
        {description}
      </p>
    </Card>
  )
}
