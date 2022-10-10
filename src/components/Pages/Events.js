import React from 'react'
import EventIntroScr1 from './PageComponents/EventsComponents/EventIntroScr1'
import EventProjectsScr2 from './PageComponents/EventsComponents/EventProjectsScr3'
import EventCardsScr2 from './PageComponents/EventsComponents/EventCardsScr2'

function Events() {
  return (
    <div className='flex flex-col'   >
        <EventIntroScr1/>
        <EventCardsScr2/>
        <EventProjectsScr2/>
    </div>
  )
}

export default Events