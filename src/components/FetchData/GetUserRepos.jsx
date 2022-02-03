import React from "react";
import axios from "axios";
import '../UserDetailsCard/UserDetailsCard.css'
import PageLoader from "../PageLoader/PageLoader";

const createRepos = (oneRepo) => {
    return (
        <RepoCard
            key={oneRepo.id}
            repo_id={oneRepo.repo_id}
            repo_name={oneRepo.user_repo_name}
        />
    )
}

const RepoCard = (props) => {
    return (
        <li>{props.repo_name}</li>
    )
}

export default class GetUserRepos extends React.Component {

    state = {
        repos: [],
        loading: null
    }

    componentDidMount() {
        const initView = async () => {

            const user = window.location.href.split('/').at(-1)
            const URL = `https://api.github.com/users/${user}/repos`
            const res = await axios.get(URL)

            this.loader = true
            const repos = []

            for (let i = 0; i < res.data.length; i++) {
                repos.push({
                    id: i,
                    repo_id: res.data[i].id,
                    user_repo_name: res.data[i].name
                })
            }
            this.setState({repos})
        }
        initView().catch(error => {
            console.log('Something went wrong')
            return error
        })
    }

    render() {
        return (
            this.loader ?
                <div className={'repositories-list-container'}>
                    <ul>
                        {this.state.repos.map(createRepos)}
                    </ul>
                </div> : <PageLoader/>
        )
    }
}
