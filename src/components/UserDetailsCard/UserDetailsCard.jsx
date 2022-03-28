import React from "react";
import {teamBackground, teamBadge} from "../TeamChoose/TeamChoose";
import GetUserRepos from "../FetchData/GetUserRepos";
import './UserDetailsCard.css'
import GitHubIcon from "@mui/icons-material/GitHub";

const UserDetailsCard = (props) => {
    return (

        <div className="container-box">
            <p className="profile-header-box">Profile</p>
            <div className="container-inner-top-box">
                <img className="user-avatar-box" src={props.user_avatar} alt=""/>
                <div className="user-info-box">
                    <p className="username-box">{props.user_username}</p>
                    <p className="user-login-box">@{props.user_login}</p>
                    <div className="team-id-section-box">
                        <p className={teamBackground(props.user_id)}>{teamBadge(props.user_id)}</p>
                        <p className="id-box">ID: </p><span className="id-value-box">#{props.user_id}</span>
                    </div>

                    <div className={'github-page-box'}>
                        <a target={'_blank'} rel={'noreferrer'} href={props.user_page}>
                            <GitHubIcon
                                style={{width:12, height:12}}
                            />  GitHub page</a>
                    </div>
                </div>
            </div>
            <div className="container-inner-bottom-box">
                <div className="details-box">
                    <p className="repositories-header">Repositories</p>
                    <p className="repositories-count-header">Repositories count: <span
                        className="repositories-count">{props.user_repos}</span></p>
                    <p className="repositories-list-header">Repositories list:</p>
                    <GetUserRepos/>
                </div>
            </div>
        </div>

    )
}

export default UserDetailsCard