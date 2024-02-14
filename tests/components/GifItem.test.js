import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Pruebas para el componente de GifItem', () => {

  const title = 'One Punch Man Deepanshu GIF';
  const path = 'https://media0.giphy.com/media/Qm3xCXWifrgzb9aEqg/giphy.gif?cid=99c9bfceiwn7b4eh0iirynl87muyn7fwoxvpr4b9hr8oiul6&ep=v1_gifs_search&rid=giphy.gif&ct=g';

  test('Coincide con el snapshot', () => {

    const { container } = render( <GifItem 
      title={title}
      path={path} 
      /> );

    expect( container ).toMatchSnapshot();
    
  });

  test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

    render( <GifItem title={title} path={path} /> );
    // screen.debug();

    // expect( screen.getByRole('img').src ).toBe( path );
    // expect( screen.getByRole('img').alt ).toBe( title );

    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( path );
    expect( alt ).toBe( title );

  });

  test('Debe de mostrar el título en el componente', () => {

    render( <GifItem title={title} path={path} /> );

    expect( screen.getByText( title ) ).toBeTruthy();
    
  });
  
});