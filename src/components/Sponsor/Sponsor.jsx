import "../Sponsor/sponsorStyle.css";


const Sponsor = () => {
  return (
    <div className="sponsor-header">
      <div className="sponsor">
        <img src="images/s1.png" className='sponsor-img'></img>
        <img src="images/s2.png" className='sponsor-img'></img>
        <img src="images/s3.png" className='sponsor-img'></img>
        <img src="images/s4.png" className='sponsor-img'></img>
      </div>

      <div className='phone'>
        <div className='phone-img'>
          <img src="images/phone.png" ></img>
        </div>
        <div className='phone-text'>
          <p  className="text-col-#391341">With 9jastar you get to know the artists who are changing the game and
          making waves with their incredible talent. They are the voices that
          inspire us, the sounds that move us, and the beats that make us dance.
          From rising stars to music legends, our website is dedicated to
          promoting these amazing artists and giving them the recognition they
          deserve.</p>
          <button className='phone-btn'>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default Sponsor