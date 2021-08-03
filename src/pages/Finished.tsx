import React from "react";

interface Props {
    name: string | null;
    handleRestart(): void;
}

const Finished = (props: Props) => {
    const { name, handleRestart } = props;
    return (
        <div>
            <h1>
                {name && `Player ${name} won the game`}
                {!name && "It's a tie"}
            </h1>
            <button onClick={handleRestart}>Restart</button>
        </div>
    )
}

export default Finished;
