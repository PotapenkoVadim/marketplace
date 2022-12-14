import { Link } from 'react-router/match';

export const LayoutHeader = () => {
  return (
    <header>
      <nav>
        <Link activeClassName="active" href="/">
          Home
        </Link>

        <Link activeClassName="active" href="/about">
          About
        </Link>
        
        <Link activeClassName="active" href="/blog">
          Blog
        </Link>
      </nav>
    </header>
  );
};