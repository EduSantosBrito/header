import PropTypes from "prop-types";
import routes from "@brito/routes";
import styled, { createGlobalStyle } from "styled-components";
import usePublicPath from "./hooks/usePublicPath";

const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 400;
        src: ${({ publicPath }) =>
          `url('${publicPath}/fonts/SF-Pro-Display-400.woff2') format('woff2')`}
    }
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 500;
        src: ${({ publicPath }) =>
          `url('${publicPath}/fonts/SF-Pro-Display-500.woff2') format('woff2')`}
    }
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 600;
        src: ${({ publicPath }) =>
          `url('${publicPath}/fonts/SF-Pro-Display-600.woff2') format('woff2')`}
    }
    @font-face {
        font-family: 'SF Pro Display';
        font-weight: 700;
        src: ${({ publicPath }) =>
          `url('${publicPath}/fonts/SF-Pro-Display-700.woff2') format('woff2')`}
    }
    body {
      display: grid;
      grid-template-rows: 100px 1fr;
    }
    div[id$="@brito/header"] {
      grid-row: 1;
      font-family: 'SF Pro Display', sans-serif;
    }
`;

const Menu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const Link = styled.a`
  font-weight: 700;
`;

const App = ({ name }) => {
  const publicPath = usePublicPath();

  return (
    <div>
      <GlobalStyle publicPath={publicPath} />
      <Menu>
        {routes.map((route) => (
          <div>
            <Link href={route.url}>
              <li>{route.label}</li>
            </Link>
            {route.subroutes?.length && (
              <ul>
                {route.subroutes?.map((subroute) => (
                  <a href={`${route.url}${subroute.url}`}>
                    <li>{subroute.label}</li>
                  </a>
                ))}
              </ul>
            )}
          </div>
        ))}
      </Menu>
    </div>
  );
};

App.propTypes = {
  name: PropTypes.string.isRequired,
};

export default App;
