import PropTypes from 'prop-types';

export const GifItem = ({ title, path }) => {

  return (
    <div className='card'>
      <img src={path} />
      <p>{ title }</p>
    </div>
  )
}

GifItem.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string.isRequired
}
