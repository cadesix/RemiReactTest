
function RecipeContainer(props){

    return(
    < a href="https://cadesix.github.io/chef/path">
      <div class="recipeContainer">
        <img src={props.recipeImg} class="recipeImg"></img>
        <div class="recipeText">
          <div class="recipeInfo">
            <div class="recipeTime">{props.recipeTime}</div>
            &nbsp;|&nbsp;
            <div class="recipeDifficulty">{props.recipeDifficulty}</div>
          </div>
          <div class="recipeTitle">{props.recipeTitle}</div>
        </div>
      </div>
    </a>
    );
}

export default RecipeContainer