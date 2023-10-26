import React from 'react'

const Demo = () => {
  return (
    <main>
        {/* bootstrap v5.3x */}
        <div className='container p-5 my-5 bg-dark text-white'>
            <h2>Hello</h2>
            <p>This is bootstrap version 5.3x.....</p>
        </div>
        <div className='container bg-black text-white'>
            <h2>Hello</h2>
            <p>This is bootstrap version 5.3x.....</p>
        </div>
        <div className='container-fluid bg-dark text-white p-2'>
            <h2>Hello</h2>
            <p>This is bootstrap version 5.3x.....</p>
        </div>
    </main>
  );
}

export default Demo

// p-5 => This class adds padding of 5 units on all sides (top, right, bottom, left) within the container.
// my-5 => This class adds margin of 5 units on the top and bottom of the container.
// bg => background color
// text => text color white