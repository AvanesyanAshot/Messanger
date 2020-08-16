import {connect} from 'react-redux';
import Discover from './Discover';
import {compose} from 'redux';
import {AppStateType} from '../../../Redux/redux-store';
import {InitialStateType} from '../../../Redux/Reducers/discoverReducer';

type MapPropsType = {
    store: InitialStateType
}

let mapStateToProps = (store: AppStateType) => {
    return {
        store: store.Discover
    }
}

export default compose(
    connect<MapPropsType, {}, {}, AppStateType>(mapStateToProps, {})
)(Discover)