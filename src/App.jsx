import RecipeContainer from './RecipeContainer.jsx'
import ChefBio from './ChefBio.jsx'

function App() {

  return(
    <div>
      <ChefBio
        chefImg="chef/Rene.png"
        chefName="René Redzepi"
        chefAbout="My most popular and accessible recipes from two decades at Noma."
      ></ChefBio>
      <div className="recipeList">
        <RecipeContainer 
          recipeTitle={"Smoked Mushroom Cream Sauce"}
          recipeTime={"24m"}
          recipeDifficulty={"Medium"}
          recipeImg={"chef/recipeImg.png"}
        ></RecipeContainer>
        <RecipeContainer 
          recipeTitle={"Smoked Mushroom Cream Sauce"}
          recipeTime={"24m"}
          recipeDifficulty={"Medium"}
          recipeImg={"chef/recipeImg.png"}
        ></RecipeContainer>
      </div>
    </div>
  );

}

export default App
