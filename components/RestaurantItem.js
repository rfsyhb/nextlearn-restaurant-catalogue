import Link from 'next/link';
import PropTypes from 'prop-types';
import Card from './styled/Card';
import Container from './styled/Container';

export default function RestaurantItem({ id, pictureId, name, description }) {
  return (
    <Card>
      <img
        src={`https://restaurant-api.dicoding.dev/images/small/${pictureId}`}
        alt={name}
      />

      <Container>
        <h2>
          <Link href={`detail/${id}`}>{name}</Link>
        </h2>
        <p>{description}</p>
        <br />
      </Container>
    </Card>
  );
}

RestaurantItem.propTypes = {
  id: PropTypes.string.isRequired,
  pictureId: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
