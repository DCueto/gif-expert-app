import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe('Tests de hook useFetchGifs', () => {

  test('Debe de regresar el estado inicial (arreglo vacío y isLoading en true)', () => {
    
    const { result } = renderHook( () => useFetchGifs( 'One Punch' ) );

    const { images, isLoading } = result.current;

    expect( images.length ).toEqual(0);
    expect( isLoading ).toBeTruthy();

  });

  test('Debe de retornar un arreglo de imágenes y el isLoading en false', async () => {

    const { result } = renderHook( () => useFetchGifs( 'One Punch' ) );

    await waitFor(
      () => expect( result.current.images.length ).toBeGreaterThan(0)
    );

    const { images, isLoading } = result.current;

    expect( images.length ).toBeGreaterThan(0);
    expect( isLoading ).toBeFalsy();


  });
  
});