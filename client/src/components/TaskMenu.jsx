import React from 'react'

export default function TaskMenu({ title, date, desc }) {
    return (
        <div className='container'>
            <button>Delete</button>
            <h1>{title}</h1>
            <h3>{date}</h3>
            <p>{desc}</p>
            <div className='miniContainer'>
                <label htmlFor="">Steps to Completion</label>
                <input type="text" />
                <button>Add</button>
            </div>
        </div>
    )
}
