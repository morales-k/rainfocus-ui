import React from 'react'
import Card from './Card'

const LongCard = () => {
  return (
    <div id="longCard" className="flex-row">
        <Card
            title="General"
            info="Define Attendee types & attributes" />
        <Card
            title="Title"
            info="Description that explains the value goes here. Description that explains the value goes here." />
        <Card
            title="Title"
            info="Description that explains the value goes here. Description that explains the value goes here." />
    </div>
  )
}

export default LongCard