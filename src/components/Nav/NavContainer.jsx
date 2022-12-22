import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import { navsectionReducer } from '../../redux/navsection_reducer';

const mapStateToProps = (state) => {
    return {
        navSection: state.navSection,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

const NavContainer = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavContainer;
