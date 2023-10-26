import React from 'react'

const Main = () => {
  return (
    <main>
        <article className='container mt-5 bg-whitesmoke text-dark border'>
            <form className='mb-3'>
                <h3 className='text-center'>Get Things Done!</h3>
                <div className='container mb-3'>
                    <label className='form-label'>Input Field</label>
                    <input 
                        type='text'
                        className='mx-3 form-control'
                    />
                </div>
                <button className='btn btn-primary'>ADD</button>
            </form>
        </article>
    </main>
  );
}

export default Main