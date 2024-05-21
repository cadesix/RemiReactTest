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
          recipeImg={"mushroom.jpg"}
        ></RecipeContainer>
        <RecipeContainer 
          recipeTitle={"Herb Roasted Chicken"}
          recipeTime={"1h 15m"}
          recipeDifficulty={"Medium"}
          recipeImg={"chicken.jpg"}
        ></RecipeContainer>
        <RecipeContainer 
          recipeTitle={"Classic Beef Stew"}
          recipeTime={"2h"}
          recipeDifficulty={"Medium"}
          recipeImg={"stew.jpg"}
        ></RecipeContainer>
        <RecipeContainer 
          recipeTitle={"Vegetable Curry"}
          recipeTime={"30m"}
          recipeDifficulty={"Hard"}
          recipeImg={"curry.jpg"}
        ></RecipeContainer>
        <RecipeContainer 
          recipeTitle={"Pan-Seared Salmon with Dill"}
          recipeTime={"45m"}
          recipeDifficulty={"Easy"}
          recipeImg={"salmon.jpg"}
        ></RecipeContainer>
      </div>
    </div>
  );
}

export default App
