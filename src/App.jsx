import PropTypes from "prop-types";

const App = ({ name }) => {
  return <div>Test {name}</div>;
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
