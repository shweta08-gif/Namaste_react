import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props); // to call the constructor of the parent class
    this.state = {
      userInfo: {
        name: '',
        location: '',
        avatar_url:''
      }
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/shweta08-gif");
    const json = await data.json();
    console.log(json)
    this.setState({
      userInfo: json
    })
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url}/>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @shweta08</h4>
      </div>
    );
  }
}

export default User;
