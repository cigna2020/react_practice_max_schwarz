import React from 'react';

import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return <Person
        name={person.name}
        age={person.age}
        key={person.id}
        clickH2={() => props.clicked(index)}
        changeInput={(event) => props.changed(event, person.id)}
    />
});

export default persons;