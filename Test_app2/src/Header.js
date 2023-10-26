import React from 'react'

export const Header = (props) => {
  return (
    <header className='App-header'>
        <nav>  
          {/* This method is called "props" . further details is on info.txt line number : 38*/}
            <h1>{props.title} </h1>
        </nav>
    </header>
  )

  Header.defaultProps = {
    title:"MahendTodo"
  }
}

// props & props drilling
// CSS