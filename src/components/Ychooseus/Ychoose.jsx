import "../Ychooseus/ychooseStyle.css";


const Ychooseus = () => {
  return (
    <div className='Ychooseus'>
      <div className='heading-text'>
        <h1>Why choose us</h1>
      </div>

      <div className='Ychooseus-con'>
      <div className='con1'>
          <div className='img'>
            <img src="images/y2.png" className='sponsor-img'></img>
          </div>
          <h5>Free Uploads</h5>
          <p>update up to 1000+ songs for free</p>
        </div>

        <div className='con1'>
          <div className='img'>
            <img src="images/y1.png" className='sponsor-img'></img>
          </div>
          <h5>Great Audience Reach</h5>
          <p>Our fast growing platform makes<br></br> it easier to
            expand and enhance your reach
          </p>
        </div>

        <div className='con1'>
          <div className='img'>
            <img src="images/y2.png" className='sponsor-img'></img>
          </div>
          <h5>Features that work</h5>
          <p>With the goal of empowering artists.<br></br>
            9Jaster gives you more <br></br>ways of supporting 
            the artist you love<br></br> with more social feature
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ychooseus