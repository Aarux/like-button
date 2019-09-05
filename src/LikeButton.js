import React, { Component } from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: "Verdana", sans-serif;
  font-weight: normal;
  font-size: 1.5rem;
  color: #000;
  width: 20%;
  margin: 5px;
  padding: 5px 25px;
  background-color: #fff;
  transition: 0.3s;
  border: #000 1px solid;

  ${({ liked }) =>
    liked &&
    `
    background-color: #1f2f3c;
    color: #f1f1f1;
    font-weight:bold;
  `}
`;

export default class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 100,
      liked: false
    };
    this.updateCount = this.updateCount.bind(this);
  }

  updateCount() {
    if (!this.state.liked) {
      this.setState((prevState, props) => {
        return {
          count: prevState.count + 1,
          liked: true
        };
      });
    } else {
      this.setState((prevState, props) => {
        return {
          count: prevState.count - 1,
          liked: false
        };
      });
    }
  }

  render() {
    return (
      <div>
        <Button liked={this.state.liked} onClick={this.updateCount}>
          Like | {this.state.count}
        </Button>
      </div>
    );
  }
}
