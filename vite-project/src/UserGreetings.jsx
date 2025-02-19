import PropTypes from 'prop-types'
function UserGreetings(props){

const welcomemessage = <h2>Welcome {props.username}</h2>
const loginmessage= <h2>Please Login {props.username}</h2>

  return (props.isLoggedIn ? welcomemessage : loginmessage);
}
UserGreetings.propTypes={
    isLoggedIn: PropTypes.bool,
    username : PropTypes.string
}
UserGreetings.defaultProps = {
    isLoggedIn: true,
    username: "sujan"
};
export default UserGreetings;