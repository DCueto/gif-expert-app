const { render, screen } = require("@testing-library/react");
const { default: GifExpertApp } = require("../src/GifExpertApp");
const { AddCategory } = require("../src/components");


// TODO TESTS

describe('Tests del componente <GifExpertApp />', () => {
  
  test('La función onAddCategory se ejecuta cuando se realiza el submit en el componente de <AddCategory />', () => {

    render( <GifExpertApp /> );
    screen.debug();

  });

  test('Si la categoría está repetida no se añade ninguna nueva entrada en el estado', () => {

    const inputValue = 'Valorant';
    const onNewCategory = jest.fn();
    
  });


});