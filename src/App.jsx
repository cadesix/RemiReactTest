import RecipeContainer from './RecipeContainer.jsx'
import ChefBio from './ChefBio.jsx'

function App() {

  return(
    <div>
      <ChefBio
        chefImg="Rene.png"
        chefName="René Redzepi"
        chefAbout="My most popular and accessible recipes from two decades at Noma."
      ></ChefBio>
      <div className="recipeList">
        <RecipeContainer 
          recipeTitle={"Smoked Mushroom Cream Sauce"}
          recipeTime={"24m"}
          recipeDifficulty={"Medium"}
          recipeImg={"recipeImg.png"}
        ></RecipeContainer>
        <RecipeContainer 
          recipeTitle={"Smoked Mushroom Cream Sauce"}
          recipeTime={"24m"}
          recipeDifficulty={"Medium"}
          recipeImg={"recipeImg.png"}
        ></RecipeContainer>
      </div>
    </div>
  );

}

export default App
