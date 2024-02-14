import PropTypes from 'prop-types';

export const GifItem = ({ title, path }) => {

  return (
    <div className='card'>
      <img src={path} alt={title} />
      <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}
