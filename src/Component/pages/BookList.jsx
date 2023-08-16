import React from 'react';

function BookList(props) {
    return (
        <div>
            Hello world
            {
                process.env.REACT_APP_GIRLFRIEND_NAME
            }
        </div>
    );
}

export default BookList;