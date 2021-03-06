import React, {useState} from 'react'

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getMax(votes) {
    let max = 0;
    let index = 0;

    for (let i = 0; i < 6; i++) {

        if (votes[i] > max) {
            max = votes[i];
            index = i;
        }
    }
    console.log(index)
    return index
}

const Header = ({text}) => {
    return < h1>{text}</h1>
}
const Button = ({handleClick, text}) => {
    return (<div>
        <button onClick={handleClick}>{text}</button>
    </div>)
}
const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
    ]
    const points = {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0}

    const handleNext = () => {
        setSelected(getRandomInt(6))
    }

    const handleVote = () => {
        const copyPoints = {...votes}
        copyPoints[selected] += 1;
        setVotes(copyPoints);
    }

    const [selected, setSelected] = useState(0)

    const [votes, setVotes] = useState(points);

    return (
        <div>
            <Header text={'Anecdote of the day'}/>
            {anecdotes[selected]}
            <p>has {votes[selected]} votes.</p>
            <Button handleClick={handleVote} text={'Vote'}/>
            <Button handleClick={handleNext} text={'Next anecdote'}/>
            <Header text={'Anecdote with most votes'}/>
            <p>{anecdotes[getMax(votes)]}. Has {votes[getMax(votes)]} votes</p>
        </div>
    )
}

export default App