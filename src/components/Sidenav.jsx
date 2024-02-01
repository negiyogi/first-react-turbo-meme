// About.js
import React from 'react';

function Sidenav() {
  return (
    <div>
     <aside class="main-sidebar sidebar-dark-primary elevation-4">
   <a href="" class="brand-link">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQphO1iGa3a8wJpd43zAbREvXa8q4DmAIKww&usqp=CAU" alt="AdminLTE Logo" class="brand-image  elevation-3"/>

   <span class="brand-text font-weight-light"></span>
   </a>
   <div class="sidebar">
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
         <div class="image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4f6wnsNip4N-P-57m1bUYxRx7zsz7Q1uFA&usqp=CAU" class=" elevation-2" alt="User Image"/>
         </div>
         <div class="info">
            {/* <a href="#" class="d-block">Alexander Pierce</a> */}
         </div>
      </div>
      
   </div>
</aside>
      
    </div>
  );
}

export default Sidenav;
