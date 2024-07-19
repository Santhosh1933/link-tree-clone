import React from 'react'

export const ExploreEventsLayout = ({children}) => {
  return (
    <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-start place-items-center gap-12 mt-8">{children}</div>
  )
}
