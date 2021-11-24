// libraries
import React from 'react';
//=================================================//

// imported image
import Image from '../images/Radio.png';
//=================================================//

// material-ui componenets
import { Paper, makeStyles } from '@material-ui/core';
//=================================================//

// material-ui makeStyles
const useStyles = makeStyles(() => ({
    div: {
        marginBottom: '20px'
    },
    paragraph: {
        margin: 'auto 0 auto 36px',
        fontFamily: 'Manrope',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '18px',
        lineHeight: '25px'
    },
    number: {
        width: '50px',
        height: '53.58px',
        background: 'linear-gradient(180deg, #00A9A7 0%, #00BA89 100%)',
        margin: '18px 0',
        color: '#FFFFFF',
        fontFamily: 'Manrope',
        fontSize: '36px',
        fontStyle: 'normal',
        fontWeight: '700',
        lineHeight: '49px',
        letterSpacing: '0em',
        textAlign: 'center'
    },
    container: {
        position: 'relative',
        padding: '0.5rem 2rem',
        display: 'flex',
        height: '85.7215576171875px',
        '&::after': {
            position: 'absolute',
            content: '""',
            bottom: '0',
            left: '0',
            height: '3%',
            width: '11%',
            background: 'linear-gradient(180deg, #00A9A7 0%, #00BA89 100%)',
            transitionDuration: '0.5s',
        },
    },
    containerActive: {
        position: 'relative',
        padding: '0.5rem 2rem',
        display: 'flex',
        height: '85.7215576171875px',
        '&::after': {
            position: 'absolute',
            content: '""',
            bottom: '0',
            left: '0',
            height: '3%',
            width: '16.5%',
            background: 'linear-gradient(180deg, #00A9A7 0%, #00BA89 100%)',
            transitionDuration: '0.5s',
        }
    },
    paper: {
        position: 'relative',
        borderBottom: '',
        cursor: 'pointer'
    },
    li: {
        marginTop: '10px',
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontStyle: 'normal',
        fontWeight: 400,
        lineHeight: '21px',
        letterSpacing: '0em',
        textAlign: 'left',
        listStyleImage: `url(${Image})`
    }
}));
//=================================================//


const Step = ({ step, index, changeCurrent, currentId }) => {
    // functions
    const changeStatus = () => {
        if (currentId === null) {
            changeCurrent(index)
        }
        else if (currentId === index) {
            changeCurrent(null)
        }
        else if (currentId !== index && currentId !== null) {
            changeCurrent(index)
        }
    }
    //=================================================//

    // classes declaration
    const classes = useStyles();
    //=================================================//

    return (
        <div className={classes.div}>
            <Paper elevation={6} className={classes.paper} onClick={changeStatus}>
                <div className={currentId === index ? classes.containerActive : classes.container}>
                    <div className={classes.number}>{step.nr}</div>
                    <p className={classes.paragraph}>{step.text}</p>
                </div>
            </Paper>
            {
                currentId === index ?
                    <ul>
                        {step.list.map((listItem, i) => (
                            <li 
                            className={classes.li} 
                            key={i} 
                            dangerouslySetInnerHTML={{__html: listItem}}>
                            </li>
                        ))}
                    </ul>
                    :
                    <></>
            }
        </div>
    )
}

export default Step;