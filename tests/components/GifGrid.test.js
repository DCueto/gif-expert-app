const { render, screen } = require("@testing-library/react");
const { GifGrid } = require("../../src/components");
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');


describe('Tests de componente <GifGrid />', () => {

  const category = 'One Punch';
  
  test('Debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });
    
    render( <GifGrid category={ category } /> );

    expect( screen.getByText('Cargando...') ).toBeTruthy();
    expect( screen.getByText( category ) ).toBeTruthy();

    // screen.debug();
  });

  test('Debe de mostrar los items cuando se cargan las imágenes mediante useFetchGifs', () => {

    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        path: 'https://localhost/saitama.jpg'
      },
      {
        id: '123',
        title: 'Naruto',
        path: 'https://localhost/naruto.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false,
    });
    
    render( <GifGrid category={ category } /> );
    
    expect( screen.getAllByRole('img').length ).toBe(2);

  });

});