import { connect } from 'react-redux';

import { LoadingComponent } from './index';

const mapStateToProps = (state) => {
  const { text } = state.loading;
  const { isLoading } = state.loading;
  return { text, isLoading };
};

const mapDispatchToProps = (dispatch) => {

};

export const LoadingContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingComponent);
