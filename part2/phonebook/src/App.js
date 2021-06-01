import React, {useState} from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        {name: 'Arto Hellas'}
    ])
    const [newName, setNewName] = useState('')

    const onChangeNumber = (event) => {
        setNewName(event.target.value);
    }

    const onSubmitNote = (event) => {
        event.preventDefault();
        isDuplicated(newName)
            ? window.alert(`${newName} is already in the phonebook !`)
            : setPersons(persons.concat({name: newName}))
    }

    const isDuplicated = (name) => {
        let cleanedName = name.replaceAll(' ' , '');
        return persons.find(person => person.name === cleanedName && person.name.length === cleanedName.length);
    }
    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={onSubmitNote}>
                <div>
                    name: <input value={newName} onChange={onChangeNumber}/>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map((person) => (<p key={person.name}>{person.name}</p>))}
        </div>
    )
}

export default App