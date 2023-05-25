import React from 'react';
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus } from '../../Redux/profile-reducer';
import Content from './Content';
import { useNavigate, useLocation, useParams} from "react-router-dom";
import {withAuthRedirect} from "./../../hoc/withAuthRedirect";


const withRouter = (Component) => {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ContentContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match ? this.props.match.params.userId : 2;
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
        }

    render() {


        return (
            <Content {...this.props} profile={this.props.profile} 
                status={this.props.status} 
                updateStatus={this.props.updateStatus}/>
        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ContentContainer);

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile, getStatus, updateStatus})(withRouter(WithUrlDataContainerComponent));