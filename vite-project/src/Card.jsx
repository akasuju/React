import Profile from './assets/Profile.jpg'


function Card(){
    return(
<div className="card">
<img className='card-img' src={Profile} style={{height: "170px", width: "200px"}} alt="Profile Picture"></img>
<h2 className='card-title'>Sujan</h2>
<p className='card-text'>I am a student learning React through react docs and BroCode</p>
</div>
    )
}
export default Card;
