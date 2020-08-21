import React, { Component } from "react";
import Wrapper from "./components/Wrapper/index";
import EmployeeCard from "./components/EmployeeCard/index";
import Form from "./components/SearchForm/index";
import Button from "./components/Button/index";
import Title from "./components/Title/index";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
  };

  render() {
    return (
      <Wrapper>
        <Title>Employee Management Tracker</Title>
        <Form />
        <Button>Sort Alphabetically</Button>
        {this.state.friends.map(friend => (
          <EmployeeCard
            removeFriend={this.removeFriend}
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
