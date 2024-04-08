import './background.css'

const Background = () => {
  return (
    <>
      <div id='first-background' className="first-background-container">
        <img className="first-background-image" src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />

        <div className="first-image-texts">
          <h1 className='first-background-page-topic'>Welcome to My Portfolio!</h1>
          <p className='first-background-page-text'>
            Feel free to discover my projects
          </p>
        </div>
      </div>



    </>

  )
}

export default Background;