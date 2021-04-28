import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner/Spinner';
import { Link } from 'react-router-dom';
import Repos from "../Repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);

    const { getUser, user, loading, repos, getRepos } = githubContext;
    useEffect(() => {
        getUser(match.params.login)
        getRepos(match.params.login)
        //eslint-disable-next-line
    }, [])

    const {
        name,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
        company,
        twitter_username,
    } = user;

    loading && <Spinner />

    return (
        <Fragment>
            <Link to='/' className="btn btn-light" >
                Back
                </Link>
                Hireable: {' '}
            {hireable ? (
                <i className="fas fa-check text-success" />
            ) : (
                    <i className="fas fa-times-circle text-danger" />
                )}
            <div className="card grid-2">
                <div className="all-center">
                    <img src={avatar_url} alt={name} className="round-img" style={{ width: 150 }} />
                    <h1>{name}</h1>
                    <p>{location}</p>
                </div>
                <div className="">
                    {bio &&
                        <Fragment>
                            <h2>
                                Bio
                            </h2>
                            <p>{bio}</p>
                        </Fragment>
                    }
                    <a
                        href={html_url}
                        className="btn btn-dark my-1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on GitHub
                             <i className="fab ml-1 fa-github" />
                    </a>
                    <ul>
                        <li>
                            {login &&
                                <Fragment>
                                    <p> <i className="fas fa-user mr-1 text-twitter" /> {login}</p>
                                </Fragment>}
                        </li>
                        <li>
                            {company &&
                                <Fragment>
                                    <strong><i className="fas fa-building text-twitter mr-1" />{company}</strong>
                                </Fragment>}
                        </li>
                        <li>
                            {blog &&
                                <Fragment>
                                    <i className="fas fa-link mr-1" />
                                    <a
                                        href={blog}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-twitter"
                                    >
                                        {blog}
                                    </a>
                                </Fragment>}
                        </li>
                        <li>
                            {twitter_username &&
                                <Fragment>
                                    <i className="fab fa-twitter mr-1 text-twitter" />
                                    <a
                                        href={`https://twitter.com/${twitter_username}`}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-twitter"
                                    >
                                        {twitter_username}
                                    </a>
                                </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className="card text-center">
                <div className="badge badge-success">
                    followers: {followers}
                </div>
                <div className="badge badge-success">
                    following: {following}
                </div>
                <div className="badge badge-dark">
                    public repos: {public_repos}
                </div>
                <div className="badge badge-dark">
                    public gists: {public_gists}
                </div>
            </div>
            <Repos repos={repos} />
        </Fragment>
    )

}


export default User
