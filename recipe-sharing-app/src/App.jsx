import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Recipe Sharing Application</h1>

      {/* Form to add new recipes */}
      <AddRecipeForm />

      {/* List of all recipes */}
      <RecipeList />
    </div>
  );
}

export default App;
