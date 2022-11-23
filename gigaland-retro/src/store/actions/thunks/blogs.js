import { Axios, Canceler } from '../../../core/axios';
import * as actions from '../../actions';
import api from '../../../core/api';

export const getBlogPosts = (postId) => async (dispatch) => {

  dispatch(actions.getBlogPosts.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.blogs}${postId ? '/single.json' : '/all.json'}`, {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getBlogPosts.success(data));
  } catch (err) {
    dispatch(actions.getBlogPosts.failure(err));
  }
};

export const getBlogComments = (postId) => async (dispatch) => {

  dispatch(actions.getComments.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.comments}`, {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getComments.success(data));
  } catch (err) {
    dispatch(actions.getComments.failure(err));
  }
};

export const getBlogTags = (postId) => async (dispatch) => {

  dispatch(actions.getTags.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.tags}`, {
      cancelToken: Canceler.token,
      params: {}
    });

    dispatch(actions.getTags.success(data));
  } catch (err) {
    dispatch(actions.getTags.failure(err));
  }
};

export const getRecentPosts = () => async (dispatch) => {

  dispatch(actions.getRecentPosts.request(Canceler.cancel));

  try {
    const { data } = await Axios.get(`${api.baseUrl}${api.recent}`, {
      cancelToken: Canceler.token
    });

    dispatch(actions.getRecentPosts.success(data));
  } catch (err) {
    dispatch(actions.getRecentPosts.failure(err));
  }
};
