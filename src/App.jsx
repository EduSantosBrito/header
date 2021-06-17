import PropTypes from "prop-types";
import routes from "@brito/routes";
import { useEffect } from "react";

const App = ({ name }) => {
  useEffect(() => {
    console.info(routes);
  }, []);

  return (
    <div>
      <ul>
        {routes.map((route) => (
          <>
            <a href={route.url}>
              <li>{route.label}</li>
            </a>
            {route.subroutes?.length && (
              <ul>
                {route.subroutes?.map((subroute) => (
                  <a href={`${route.url}${subroute.url}`}>
                    <li>{subroute.label}</li>
                  </a>
                ))}
              </ul>
            )}
          </>
        ))}
      </ul>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
