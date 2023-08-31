// import { connect } from "react-redux";
import Cards from "./Cards";
import { useSelector, useDispatch } from "react-redux";
import { sortById, filterByGender, reset } from "../redux/actions";

function Favorites() {

    const myFavorites = useSelector((state) => state.myFavorites)
    const dispatch = useDispatch()

    const sortHandler = (event) => {
        dispatch(sortById(event.target.value))

    }

    const filterHandler = (event) => {
    dispatch(filterByGender(event.target.value))
    }  
    
    const resetHandler = () => {
        dispatch(reset());
    }



    return (
    <div>
        <select placeholder="Gender" onChange={filterHandler}>
            {["Male", "Female", "unknown", "Genderless"].map(gender=> 
            <option 
            key={gender} value= {gender}>{gender}
            </option>)}
        </select>
        <select placeholder="Sort" onChange={sortHandler}>
            {["Ascendente" ,"Descendente"].map(order=> 
            <option 
            key={order} value= {order}>{order}
            </option>)}
        </select>
        <button onClick={resetHandler}>RESET</button>
        <Cards characters={myFavorites}/>
        </div>
        );
}

export default Favorites

// const mapStateToProps = (state) => {
//     return {
//         favorites: state.myFavorites
//     }
// }

// export default connect(mapStateToProps, null)(Favorites);