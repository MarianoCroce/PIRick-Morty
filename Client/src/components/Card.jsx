import React from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../redux/actions";
import { useState, useEffect} from "react";




export function Card(props) {
   const navigate = useNavigate();
   const {character, onClose, myFavorites, addFav, removeFav, image, gender, origin, status, id, name, species} = props;
   const [isFav, setIsFav] = useState(false);
   const [closeBtn, setCloseBtn] = useState(true);
   
   function navigateHandler() {
      navigate(`/detail/${id}`);
   }

   useEffect(() => {
      if (!onClose) {
        setCloseBtn(false);
      }
    }, []);
   
   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites, id]);

   const handleFavorite = () => {
      if(!isFav) {
         addFav({image, gender, origin, status, id, name, species});
         setIsFav(true)
      } else {
         removeFav(id);
         setIsFav(false)
      }
   }


   return (
      <div>
         {closeBtn &&(
         <button 
         onClick={() => {onClose(id);
         }}
         >
         X
      </button>
      )}
      {/* <Link to={`/detail/${id}`} > */}
      <h2 className="card-name">{name}</h2>
      {/* </Link> */}
      {isFav ? (
      <button onClick={() => handleFavorite(id)}>❤️</button>
      ) : (
      <button onClick={() => handleFavorite(character)}>🤍</button>
      )}

      <h2>Estado: {status}</h2>
      <h2>Especie: {species}</h2>
      <h2>Genero: {gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt={name} onClick={navigateHandler}/>
   </div>
   );
};

const mapDispatchToProps = (dispatch) => {
   
   return {
   addFav: (character) => dispatch (addFav(character)),
   removeFav: (id) => dispatch (removeFav(id)),
};
};

const mapStateToProps = (state) => {

   return {
      myFavorites: state.myFavorites
   }
}

// export default Card;




export default connect (mapStateToProps, mapDispatchToProps)(Card);