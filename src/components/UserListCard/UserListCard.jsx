import React from "react";
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {teamBackground} from "../TeamChoose/TeamChoose";
import './UserListCard.css'
import GitHubIcon from '@mui/icons-material/GitHub';

const UserListCard = (props) => {

    return (
        <Col xl={4} lg={4} md={6} xs={12} className="one-card">
            <div className={'one-card-margin'}>
                <div className={'container-inner-top'}>
                    <img className={'user-avatar'} src={props.user_avatar} alt=""/>
                    <div className={'user-info'}>
                        <p className={'user-login'}>@{props.user_login}</p>
                        <div className={'team-id-section'}>
                            <p className={teamBackground(props.user_id)}>{props.user_team}</p>
                            <p className={'id'}>ID: #</p>
                            <span className={'id-value'}>{props.user_id}</span>
                        </div>
                        <div className={'github-page'}>
                            <a target={'_blank'} rel={'noreferrer'} href={props.user_page}>
                                <GitHubIcon
                                    style={{width:12, height:12}}
                                />  GitHub page</a>
                        </div>

                    </div>
                </div>
                <div className={'container-inner-bottom'}>
                    <p className={'details'}><Link to={"/userdetails/" + props.user_login}>Details</Link></p>
                </div>
            </div>
        </Col>
    )
}

export default UserListCard