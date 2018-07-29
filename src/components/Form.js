import React from 'react';

const Form = props => (
   <form onSubmit={props.getResipe}>
   	<input type="text" name="recipeName" />
      	<button>search</button>
   </form> 
	);
 export default Form;