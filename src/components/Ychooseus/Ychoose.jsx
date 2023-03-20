import "../Ychooseus/ychooseStyle.css";


const Ychooseus = () => {
  return (
    <div className='Ychooseus'>
      <div className='heading-text'>
        <h1>WHY ARTISTES CHOOSE US</h1>
      </div>

      <div className='Ychooseus-con'>
      <div className='con1'>
          <div className='img'>
            <img src="images/ny1.png" className='sponsor-img'></img>
          </div>
          <h5>Free Uploads</h5>
          <p>update up to 1000+ songs for free</p>
        </div>

        <div className='con1'>
          <div className='img'>
            <img src="images/ny2.png" className='sponsor-img'></img>
          </div>
          <h5 className="cb">Great Audience Reach</h5>
          <p>Our fast growing platform makes it easier to
            expand and enhance your reach
          </p>
        </div>

        <div className='con1'>
          <div className='img'>
            <img src="images/ny3.png" className='sponsor-img'></img>
          </div>
          <h5>Features that work</h5>
          <p>With the goal of empowering artists.
            9Jaster gives you more ways of supporting 
            the artist you love with more social feature
          </p>
        </div>
      </div>
    </div>
  )
}

export default Ychooseus