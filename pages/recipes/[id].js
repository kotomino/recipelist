// tells Next how many HTML pages need to be made based off of data based on the paths data
export const getStaticPaths = async () => {
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s');
  const data = await resp.json();

  const paths = data.meals.map(recipe => {
    return {
      params: { id: recipe.idMeal.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
} 

//For each path inside paths, fetch is run for each item, and returns props recipe
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id);
  const data = await resp.json();

  return {
    props: { recipe: data.meals }
  }
}

//Build HTML page for each individual item
const Details = ({ recipe }) => {
  return (
    <div>
      <h1>{ recipe[0].strMeal }</h1>
      <p>Type: { recipe[0].strArea } </p>
      <h2>Instructions</h2>
      <p>{ recipe[0].strInstructions }</p>
    </div>
  );
}
 
export default Details;