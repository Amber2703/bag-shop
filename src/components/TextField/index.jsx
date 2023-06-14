import PropTypes from 'prop-types';
import { Input } from './styled';

function TextField({ placeholder, error, errorLabel, ...rest }) {
  return (
    <Input
      placeholder={error ? errorLabel : placeholder}
      error={error}
      {...rest}
    />
  );
}

TextField.propTypes = {
  placeholder: PropTypes.string,
  error: PropTypes.bool,
  errorLabel: PropTypes.string,
};

export default TextField;
