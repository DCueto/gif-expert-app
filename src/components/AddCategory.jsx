import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue( target.value );
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if( inputValue.trim() === '' ) return;
    
    // setCategories( categories => [...categories, inputValue] );
    onNewCategory( inputValue.trim() );
    setInputValue('');
  }
  
 
  return (
    <form
      onSubmit={ onSubmit }

    >
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
