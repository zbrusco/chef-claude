import { useEffect, useRef, useState } from "react";
import IngredientsList from "./IngredientsList";
import Recipe from "./RecipeAI";
import { getRecipeFromChefGemini, getRecipeFromMistral } from "../../ai";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");
  const [gettingRecipe, setGettingRecipe] = useState(false);
  const recipeSection = useRef(null);

  // Scroll to the recipe once it's available
  useEffect(() => {
    console.log(recipeSection.current);
    if (recipe && recipeSection.current) {
      recipeSection.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [recipe]);

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prev) => [...prev, newIngredient]);
  }

  async function getRecipe() {
    setGettingRecipe(true);
    const response = await getRecipeFromChefGemini(ingredients);
    // const response = await getRecipeFromMistral(ingredients);
    setRecipe(response);
    setGettingRecipe(false);
  }

  return (
    <main>
      <form action={addIngredient} className="ingredient-form">
        <input
          aria-label="Add ingredients"
          placeholder="e.g. oregano"
          type="text"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {ingredients.length > 0 && (
        <IngredientsList
          ref={recipeSection}
          ingredients={ingredients}
          getRecipe={getRecipe}
          gettingRecipe={gettingRecipe}
        />
      )}
      {recipe && <Recipe recipe={recipe} />}
    </main>
  );
}
