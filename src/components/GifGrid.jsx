import PropTypes from 'prop-types';

import { GifItem } from './';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category );

  return (
    <article>
      <h3>{ category }</h3>

      {
        isLoading && ( <h2>Cargando...</h2> )
      }

      <div className='card-grid'>
      {
        images.map( (image) => (
          <GifItem 
            key={ image.id } 
            { ...image }

          />
        ))
      }
      </div>

    </article>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}