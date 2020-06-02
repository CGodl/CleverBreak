import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import Greeting from './greeting';

const mDTP = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mDTP,
  mDTP
)(Greeting);
