import PropTypes from 'prop-types';

export const GalleryItem = ({ webformatURL, tags }) => {
    return (
      <li className="ImageGalleryItem">
        <img className="ImageGalleryItem-image" src={webformatURL} alt={tags} />
      </li>
    );
}
GalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string
  }).isRequired
}