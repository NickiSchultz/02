import { connect } from "react-redux";
import { follow, setUsers, unFollow, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress, getUsers } from "../../Redux/users-reducer";
import React from 'react';
import Users from './Users.jsx';
import Preloader from '../Common/Preloader/Preloader.jsx';
import {withAuthRedirect} from "./../../hoc/withAuthRedirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize);
        };
    


    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                unFollow={this.props.unFollow}
                follow={this.props.follow} 
                toggleFollowingProgress= {this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}/>
        </>
    }
};

let AuthRedirectComponent = withAuthRedirect(UsersContainer);

let mapStateToProps = (state) => {


    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setUsersTotalCount,
    toggleIsFetching,
    toggleFollowingProgress,
    getUsers
})(AuthRedirectComponent);