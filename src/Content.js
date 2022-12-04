import Card from "./Card";

export default function Content(props) {
  const cards = props.cards;
  return (
    <>
      {cards.map((card, index) => (
        <Card question={card.question} answer={card.answer} index={index+1} />
      ))}
    </>
  );
}
