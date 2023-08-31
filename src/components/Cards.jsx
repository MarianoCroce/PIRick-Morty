import React from "react";
import Card from './Card';

export default function Cards({characters, onClose}) {

   return(
   <div> {characters?.map((character) => (
      <div key={character.id}>
      <Card
      id = {character.id}
      name={character.name}
      status={character.status}
      species={character.species}
      gender={character.gender}
      origin={character.name}
      image={character.image}
      onClose={onClose}
      />
      </div>
        ))} 
        </div>
   )
}
