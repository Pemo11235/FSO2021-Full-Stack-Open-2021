const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100_000 * Math.random()).toFixed(0)

const asObject = (anecdote) => ({
  content: anecdote,
  id: getId(),
  votes: 0,
})

const initialState = anecdotesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  if (action.type === 'VOTE') {
    const anecdoteToVote = state.find((a) => a.id === action.data.id)
    const votedAnecdote = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1,
    }
    const newState = state.map((a) =>
      a.id === votedAnecdote.id ? votedAnecdote : a
    )
    return newState
  }

  if (action.type === 'CREATE') {
    const newState = [...state, action.data]
    return newState
  }

  return state
}

const voteAnecdote = (id) => ({
  type: 'VOTE',
  data: { id },
})

const createAnecdote = (content) => ({
  type: 'CREATE',
  data: {
    content,
    id: getId(),
    votes: 0,
  },
})

export { voteAnecdote, createAnecdote }
export default reducer
