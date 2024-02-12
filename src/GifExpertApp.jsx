import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {

  const [categories, setCategories] = useState([ 'One Punch' ]);

  const onAddCategory = ( newCategory ) => {
    if( categories.includes( newCategory ) ) return;

    setCategories( [ newCategory, ...categories ] );
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory
        // setCategories={ setCategories }
        onNewCategory = { onAddCategory }
      />

      <section>
        {
          categories.map( (item) =>
            ( <GifGrid
                key={ item }
                category={ item } />
            )
          )
        }
      </section>

    </>
  )

}

export default GifExpertApp;