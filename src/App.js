// libraries
import React, { useState } from 'react';
//=================================================//

// custom components
import Step from './components/Step';
//=================================================//

// material-ui componenets
import { Container } from '@material-ui/core';
//=================================================//

// custom css
import './App.css';
//=================================================//

// steps array

const steps = [
  {
    text: 'Build test task',
    nr: 1,
    list: ['Create repository', 'Implement designs', 'Implement functionality']
  },
  {
    text: 'Submit your test task',
    nr: 2,
    list: ['Open email client', `Send link to <a href>careers@cornercasetech.com</a> with information `]
  },
  {
    text: 'Participate in tech interview',
    nr: 3,
    list: ['Talk with HR', 'Talk with Tech team']
  },
  {
    text: 'Receive answer',
    nr: 4,
    list: ['Receive answers', 'Start your IT career']
  }
]
//=================================================//

function App() {
  // hooks
  const [current, setCurrent] = useState(null)
  //=================================================//

  return (
    <Container maxWidth="xl">
      <h1>CCT Lab process</h1>
      {steps.map((step, i) => (
        <Step
          key={i}
          step={step}
          index={i}
          currentId={current}
          changeCurrent={setCurrent}
        />
      ))}
    </Container >
  );
}

export default App;
