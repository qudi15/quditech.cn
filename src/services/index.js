import { get, post, put, del } from '../util';
import store from '../store';

function getToken () {
  return store.state.user.token;
}

export function saveTopic (params) {
  const url = `/services/topic?token=${getToken()}`;
  return post(url, params);
}

export function getTopics () {
  const url = '/services/topic';
  return fetch(url);
}

export function getTopic (id) {
  const url = `/services/topic/${id}`;
  return fetch(url);
}

export function updateTopic (id, params) {
  const url = `/services/topic/${id}?token=${getToken()}`;
  return put(url, params);
}

export function deleteTopic (id) {
  const url = `/services/topic/${id}?token=${getToken()}`;
  return del(url, id);
}

export function login (token) {
  const url = `/services/user/login?token=${token}`;
  return fetch(url);
}

export function getCategories () {
  const url = '/services/category';
  return get(url);
}
