import React from 'react'

const Gate = ({title,isOpen}) => {
    return (
        <div className="gate">
            <h1>{title}</h1>
            {isOpen == true ? "open!" : "close"}
        </div>
    )
}

export default Gate
