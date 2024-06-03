
function RecipeComponent(props) {

    return(
      <div>
        <div><h1>{props.title}</h1></div>
        <img src={props.recipeImg}></img>
      </div>
    )
  }
  
  export default RecipeComponent