import Head from 'next/head';
import Link from 'next/link';
import styles from '../../styles/Recipes.module.css';

//runs at build time, not in the browser
export const getStaticProps = async () => {
  const resp = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=s');
  const data = await resp.json();
  
  return {
    props: { recipes: data.meals }
  }
}


const Recipes = ({ recipes }) => {

  return (
    <>
      <Head>
        <title>Recipe List | Recipes</title>
        <meta name="keywords" content="recipes"/>
      </Head>
      <div>
        <h1>Recipe List</h1>
        {recipes.map(recipe => (
          <Link href={'/recipes/' + recipe.idMeal} key={recipe.idMeal}>
            <a className={styles.single}>
              <h3>{recipe.strMeal}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
}
 
export default Recipes;