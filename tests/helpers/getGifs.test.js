import { getGifs } from "../../src/helpers/getGifs";

describe('Tests de la función getGifs que proporciona los gifs del servicio REST API', () => {
  
  test('La función getGifs debe retornar un arreglo de gifs', async() => {
    
    const gifs = await getGifs('Naruto');

    expect( gifs.length ).toBeGreaterThan(0);
    expect( gifs[0] ).toEqual( {
      id: expect.any( String ),
      title: expect.any( String ),
      path: expect.any( String ),
    } );

  });


});