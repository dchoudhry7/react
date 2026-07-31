import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function AppFn() {
  return (
    <div className="App">
      <h1>I am a App Function</h1>
    </div>
  );
}

const reactElement = {
    type : 'a' ,
    props : {
        href : 'https://google.com' ,
        target : '_blank'
    } ,
    childern : 'Click me to visit Google'
}

const newElement = (
    <a href='https://google.com'>Google!</a>
)

const anotherElement = React.createElement(
    'a',
    {href: 'https://youtube.com'},
    'Youtube!'
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <AppFn /> (works)
    // AppFn() (works)
    // reactElement (error)
    // newElement (works)
    // anotherElement (works)
);

// variable can be injected but not a js code snippet that is only end evaluated at runtime. React only accepts a variable that is a react element or a function that returns a react element. It does not accept a code snippet that is only evaluated at runtime. 