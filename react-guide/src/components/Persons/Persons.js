import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     // console.log("Props: " + props + "State: " + state);
    //     console.log('[PersonS.js] getDerivedStateFromProps');
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("[PersonS.js] shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[PersonS.js] getSnapshotBeforeUpdate');
        // console.log(prevProps);
        return {message: 'SnapShot!'};
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[PersonS.js] componentDidUpdate')
        console.log(snapshot);  // return {message: 'SnapShot!'}
    }

    componentWillUnmount() {
        console.log('[PesonS.js], componentWillUnmount'); // викликається коли компонет зникає з сторінки (toggle persons)
    };

    render() {
        console.log('[PersonS.js] rendering...');

        return this.props.persons.map((person, index) => {
            return (<Person
                name={person.name}
                age={person.age}
                key={person.id}
                clickH2={() => this.props.clicked(index)}
                changeInput={(event) => this.props.changed(event, person.id)}
            />);
        });
    }
}

export default Persons;