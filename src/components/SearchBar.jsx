import React, { useState } from "react";

export default function SearchBar({onSearch}) {

   const [id, setId] = useState("");

   function handleInputChange(event) {
      setId(event.target.value)
   }

   return (
      <div>
         <input 
         type='search'
         onChange={handleInputChange}        
         value={id} 
         />
         <button onClick={() => onSearch(id)}>Agregar</button>
      </div>
   );
}
