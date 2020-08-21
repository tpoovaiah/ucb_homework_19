import React, { Component } from "react";
import Wrapper from "./components/Wrapper/index";
import EmployeeCard from "./components/EmployeeCard/index";
import Form from "./components/SearchForm/index";
import Button from "./components/Button/index";
import Title from "./components/Title/index";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends
  };

  handleButtonClick = event => {
    event.preventDefault()
    //console.log("reached btn click, ", this.state.friends)
    this.sortEmployees(this.state.friends)
  }

  sortEmployees = friends => {
    const newFriends = []
    friends.sort(function(a, b) {
      if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
      return 0;
     })
     .map(friend => {
      console.log("friends???", friend)
      newFriends.push(friend)
      return friend
     })
     this.setState({newFriends})
     ;
  }


  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  filterEmployees = name => {
    const employees = this.state.friends.filter(friend => friend.name === name)
    this.setState({ employees })
  }

  render() {
    return (
      <Wrapper>
        <Title>Employee Management Tracker</Title>
        <Form 
        filterEmployees={this.filterEmployees}
        />
        <Button handleButtonClick={this.handleButtonClick} >Sort Alphabetically</Button>
        {this.state.friends.map(friend => (
          <EmployeeCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}

      </Wrapper>
    );
  }
}

export default App;
