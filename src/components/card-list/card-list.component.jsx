import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    // console.log(this.props); // We can access
    const { monsters } = this.props; // destructuring,
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          const { name, email, id } = monster; // desctructuring properties off the monster another optimization
          //   return (
          //     <div className="card-container" key={monster.id}>
          //       <img
          //         alt={`monster ${monster.name}`}
          //         src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
          //       />
          //       <h2>{monster.name}</h2>
          //       <p>{monster.email}</p>
          //     </div>
          //   );
          return (
            <Card monster={{ name, email, id }} />
            // <div className="card-container" key={id}>
            //   <img
            //     alt={`monster ${name}`}
            //     src={`https://robohash.org/${id}?set=set2&size=180x180`}
            //   />
            //   <h2>{name}</h2>
            //   <p>{email}</p>
            // </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
