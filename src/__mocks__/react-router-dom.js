import React from 'react';

export const Link = ({ to, children, ...rest }) => (
  <a href={to} {...rest}>{children}</a>
);

export const NavLink = ({ to, children, ...rest }) => (
  <a href={to} {...rest}>{children}</a>
);

export const MemoryRouter = ({ children }) => <div>{children}</div>;
export const BrowserRouter = ({ children }) => <div>{children}</div>;

export const useNavigate = () => jest.fn();
export const useLocation = () => ({ pathname: '/' });
export const useParams = () => ({});

export const Routes = ({ children }) => <div>{children}</div>;
export const Route = () => null;
export const Navigate = () => null;
