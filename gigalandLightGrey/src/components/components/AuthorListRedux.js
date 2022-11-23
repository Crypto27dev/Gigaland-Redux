import React, { memo, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import UserTopSeller from './UserTopSeller';
import * as selectors from '../../store/selectors';
import { fetchAuthorList } from "../../store/actions/thunks";

const AuthorList = () => {
    
    const dispatch = useDispatch();
    const authorsState = useSelector(selectors.authorsState);
    const authors = authorsState.data ? authorsState.data : [];

    useEffect(() => {
        dispatch(fetchAuthorList());
    }, [dispatch]);

    return (
        <div>
            <ol className="author_list">
            { authors && authors.map((author, index) => (
                <li key={index}>
                    <UserTopSeller user={author} />
                </li>
            ))}
            </ol>
        </div>
    );
};
export default memo(AuthorList);