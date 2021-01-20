import React, {useEffect} from 'react';
import styled from 'styled-components'

const cockpit = (props) => {

    useEffect(() => {
        console.log('[Cocpit.js] useEffect');
        const timer = setTimeout(() => {
            alert('use Effect')
        }, 1000);
        return () => {
            clearTimeout(timer);    // якщо Cocpit буде видалено до 1 сек., то не викине alert 
            console.log('[Cocpit.js] cleanup work in useEffect')  // викликається коли об'єкт видаляється зі сторінки
        }
    }, []);  // при пустому масиві useEffect буде викликано лише при першому рендерингу
    // }, [props.persons]);  // props.persons - означае, що useEffect буде викликано лише при першому рендерингу та при зміні persons

    useEffect(() => {
        console.log('[Cocpit.js] 2nd useEffect');
        return () => {
            console.log('[Cocpit.js] cleanup work 2nd in useEffect'); // викликається кожен раз ПЕРЕД 2nd useEffect
        }
    })

    const StyledButton = styled.button`
    background-color: ${props => props.showList ? 'red' : 'green'};
    color: white;
    font: inherit;
    border: 1px solid blue;
    padding: 8px;
    cursor: pointer;
    margin-right: 10px;

        &:hover {
            background-color: ${props => props.showList ? 'yellow' : '#8cd85c'} ;
            color: black;
            font-weight: bold;
        }
`;

    let classes = [];
    if (props.persons.length <= 2) {
        classes.push('bold');
    } if (props.persons.length <= 1) {
        classes.push('red');
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>It's really working!</p>
            <div>
                <StyledButton
                    showList={props.showList}
                    onClick={props.switcher.bind(this, 'Jex')}
                >Switch a Name</StyledButton>
                <StyledButton
                    showList={props.showList}
                    onClick={props.toggler}
                >Toggle the list</StyledButton>
            </div>
        </div>
    )
};

export default cockpit;