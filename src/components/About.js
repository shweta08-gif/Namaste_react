import UserClass from './UserClass'
import User from './User';


const About = () => {
    return (
        <div>
            <h1>About</h1>
            {/* <User name={"Shweta (functional)"} location={"Pune"}/> */}
            <UserClass name={"Shweta (Class)"} location = {"Sonepur"}/>
        </div>
    )
}

export default About