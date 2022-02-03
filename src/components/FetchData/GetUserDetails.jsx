import React from "react";
import axios from "axios";
import UserDetailsCard from "../UserDetailsCard/UserDetailsCard";
import PageLoader from "../PageLoader/PageLoader";

const createDetailsCard = (oneUser) => {
    return (
        <UserDetailsCard
            key={oneUser.id}
            user_id={oneUser.user_id}
            user_avatar={oneUser.user_avatar}
            user_username={oneUser.user_name}
            user_login={oneUser.user_login}
            user_page={oneUser.user_page}
            user_team={oneUser.user_team}
            user_repos={oneUser.user_repos}
        />
    )
}

export default class GetUserDetails extends React.Component {

    state = {
        userDetails: [],
        loading: null
    }

    componentDidMount() {

        const initView = async () => {

            const user = window.location.href.split('/').at(-1)
            const URL = `https://api.github.com/users/${user}`
            const res = await axios.get(URL)

            this.loader = true
            let userDetails = []

            userDetails.push({
                id: 1,
                user_id: res.data.id,
                user_avatar: res.data.avatar_url,
                user_name: res.data.name,
                user_login: res.data.login,
                user_page: res.data.html_url,
                user_repos: res.data.public_repos,
                user_team: null
            })

            this.setState({userDetails})
        }
        initView().catch(error => {
            console.log('Something went wrong')
            return error
        })
    }

    render() {
        return (
            this.loader ?
                <div className="app-body">
                    {this.state.userDetails.map(createDetailsCard)}
                </div> : <PageLoader/>
        )
    }
}


