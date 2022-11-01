import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const { monsters } = props; // destructuring,
  return (
    <div className="card-list">
      {monsters.map((monster) => {
        // const { name, email, id } = monster; // desctructuring properties off the monster another optimization
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
export default CardList;
