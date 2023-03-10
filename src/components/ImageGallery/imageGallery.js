import { GalleryItem } from '../ImageGalleryItem/imageGalleryItem';
import { Button } from 'components/Button/button';
import PropTypes from 'prop-types';

export const ImageGallery = ({ value, loadMore, moreImages }) => {
  return (
    <div className='ListWrap'>
    <ul className="ImageGallery">
      {value.map(({ id, webformatURL, tags }) => {
        return <GalleryItem key={id} webformatURL={webformatURL} tags={tags} />;
      })}
    </ul>
      {moreImages &&<Button onClick={loadMore} />}
      </div>
  );
};
ImageGallery.propTypes = {
  value: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  )
}