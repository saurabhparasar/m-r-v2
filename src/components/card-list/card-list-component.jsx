import { Component } from "react";
import "./card-list-styles.css";
import Card from "../card-component/card-component";
class CardList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      props: this.props,
    };

    console.log("this", this);
  }

  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
