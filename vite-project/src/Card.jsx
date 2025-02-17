import Profile from './assets/Profile.jpg'


function Card(){
    return(
<div className="card">
<img src={Profile} style={{height: "200px", width: "200px"}} alt="Profile Picture"></img>
<h2>Sujan</h2>
<p>I am a student learning React through react docs and BroCode</p>
</div>
    )
}
export default Card;