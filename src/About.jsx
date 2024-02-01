
// import React from 'react';
// import jsonData from './assets/data.json';



// function About() {
//   return (
//     <div className='content-wrapper'>
//       <h2>About Page</h2>
//       <ul>
//           {jsonData.map(item => (
//             <li key={item.id}>
//               <strong>ID:</strong> {item.id}, <strong>Name:</strong> {item.name}, <strong>Company:</strong> {item.company}, <strong>Standard:</strong> {item.standard}
//             </li>
//           ))}
//         </ul>
//       <p>This is About page content.</p>
//     </div>
//   );
// }

// export default About;

import React, { useState, useEffect } from 'react';

function About() {
  const [todo, setTodo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.publicapis.org/entries')
      .then(response => response.json())
      .then(data => {
        setTodo(data);
        setLoading(false);
        console.log(data.entries[0])
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div className='content-wrapper'>
      <h2>About Page</h2>
      <p>This is About page content.</p>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h3>API Item</h3>
         <p> {todo.count}</p>
         <p> {todo.entries[0].API}</p>
         <p> {todo.entries[0].Auth}</p>
         <p> {todo.entries[0].Description}</p>
         
        </div>
      )}
    </div>
  );
}

export default About;

