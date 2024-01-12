export default function Log({ turns }) {
  return (
    <>
      <ol id="log">
        <h2 className="h2">Turni giocatori</h2>
        {turns.map((turn, index) => (
          <li
            key={index}
          >{`${turn.player}  ${turn.square.row}, ${turn.square.col}`}</li>
        ))}
      </ol>
    </>
  );
}
