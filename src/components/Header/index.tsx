import { Container } from './styles';
import { FiSearch, FiShoppingBag, FiUser} from 'react-icons/fi';
import logo from '../../assets/images/logo.svg';

export function Header() {
  return (
    <Container>
        <div className="wrapper">
            <div className="container-image">
                <img src={logo} alt="logo" />
            </div>
            <nav>
                <ul className="ul-navigation">
                    <li>
                        <a href=""><FiSearch/></a>
                    </li>
                    <li>
                        <a href=""><FiShoppingBag/></a>
                    </li>
                    <li>
                        <a href=""><FiUser/></a>
                    </li>
                </ul>
            </nav>
        </div>
    </Container>
  );
}
