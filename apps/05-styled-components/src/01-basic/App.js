import React from 'react';

// FIRST VERSION
// The goal here is to convert the section and the h1 in styled components

export const App = () => {
  return (
    <section style={{padding: '4em', background: 'tomato'}}>
      <h1 style={{'font-size': '2em', 'text-align': 'center', color: 'blue'}}>Hello world</h1>
    </section>
  );
};

// SECOND VERSION
// Try to convert only the section to style component, and from that style component target the h1 child to style it
