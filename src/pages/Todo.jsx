import React from 'react'

export default function Todo() {
    return (
        <div className='container'>
            <div className='header'>
                <h1>TodoList</h1>
                <p>Get things done, one items at a time</p>
            </div>
            <div>
                <div className="">
                    <p>Add to the todo list</p>
                    <form className="form">
                        <input type="text" className="todo" name="todo" />
                        <button className="btn" type="submit">
                            Add Item
                        </button>
                    </form>
                </div>
            </div>

        </div>

    )
}
