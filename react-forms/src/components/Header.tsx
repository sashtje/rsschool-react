import { Component } from 'react';
import { Link } from 'react-router-dom';

interface IState {
  path: string;
}

class Header extends Component<Record<string, never>, IState> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = { path: location.pathname };
  }

  returnClass = (linkPath: string, path: string): string => {
    if (linkPath === path) {
      return 'header__link header__link_is_chosen';
    }
    return 'header__link';
  };

  render() {
    return (
      <header className="header">
        <Link
          className={this.returnClass('/', this.state.path)}
          onClick={() => this.setState({ path: '/' })}
          to="/"
        >
          Home
        </Link>
        <Link
          className={this.returnClass('/about', this.state.path)}
          onClick={() => this.setState({ path: '/about' })}
          to="/about"
        >
          About us
        </Link>
      </header>
    );
  }
}

export default Header;
