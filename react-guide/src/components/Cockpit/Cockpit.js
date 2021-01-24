import React, {useEffect} from 'react';
import styled from 'styled-components'

import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    const toggleBtnRef = React.createRef(null);
    // toggleBtnRef.current.click();  // в цьому місці працювати не буде, кнопка ще невідома. Слід використовувати в useEffect

    useEffect(() => {
        console.log('[Cocpit.js] useEffect');
        // setTimeout(() => {
        //     alert('use Effect')
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
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
    if (props.personsLength <= 2) {     // якщо буде пряме посилання на persons, а не на пропс, тоді буде ререндиринг навіть з memo
        classes.push('bold');
    } if (props.personsLength <= 1) {
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
                    ref={toggleBtnRef}
                >Toggle the list</StyledButton>
                <AuthContext.Consumer>
                    {(context) =>
                        <button onClick={context.login}>Log in</button>
                    }
                </AuthContext.Consumer>

            </div>
        </div>
    )
};

export default React.memo(cockpit);  // React.memo відслідковує чи не змінився контент, щоб повторно не рендити його