import Card from "../card/card.component";
import "./card-list.styles.css";
import { Monsters } from "../../App";

type CardListProps = {
  monsters: Monsters[];
};

const CardList = ({ monsters }: CardListProps) => {
  // const { monsters } = props; // destructuring,
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
