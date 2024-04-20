import { Component } from "react";

class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: this.props,
    };

    console.log("this", this);
  }

  render() {
    return <div key={this.props.monster.id}>{this.props.monster.name}</div>;
  }
}

export default CardList;
