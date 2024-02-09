import React from 'react'

export default function page({ params }) {
    const { event_id } = params;

    return (
        <div>page of event with id {event_id}</div>
    )
}
