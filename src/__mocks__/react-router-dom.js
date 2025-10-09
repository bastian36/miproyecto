const React = require('react');

module.exports = {
  ...jest.requireActual('react-router-dom'),
  MemoryRouter: ({ children }) => React.createElement('div', null, children),
  BrowserRouter: ({ children }) => React.createElement('div', null, children),
  Link: ({ children, to }) => React.createElement('a', { href: to }, children),
  NavLink: ({ children, to }) => React.createElement('a', { href: to }, children),
  useNavigate: () => jest.fn(),
};
