import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
    return (
        props.persons.map((p,i) => {
            return <Person 
              key={p.id}
              click={props.clicked.bind(i)}
              changed={(event) => props.changed(event,p.id)}
              name={p.name}
              age={p.age} />
          })
    );
};

export default Persons;