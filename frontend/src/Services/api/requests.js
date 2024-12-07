import { BASE_URL } from "./constants";
import axios from "axios";

// Get all
async function getAll(endpoint) {
  try {
    const response = await axios.get(BASE_URL + endpoint);
    return response.data;
  } catch (error) {
    return error;
  }
}

// Get one
async function getOne(endpoint, id, token) {
  try {
    const response = await axios.get(BASE_URL + endpoint + `/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    return error;
  }
}

// Post
async function post(endpoint, payload) {
  try {
    const response = await axios.post(BASE_URL + endpoint, payload);
    return response.data;
  } catch (error) {
    return error;
  }
}

// Delete
async function deleteOne(endpoint, id) {
  try {
    const response = await axios.delete(BASE_URL + endpoint + `/${id}`);
    return response.data;
  } catch (error) {
    return error;
  }
}

// Put
async function put(endpoint, id, payload) {
  try {
    const response = await axios.put(BASE_URL + endpoint + `/${id}`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
}

// Patch
async function patch(endpoint, id, payload) {
  try {
    const response = await axios.patch(BASE_URL + endpoint + `/${id}`, payload);
    return response.data;
  } catch (error) {
    return error;
  }
}

const controller = {
  post: post,
  getAll: getAll,
  getOne: getOne,
  deleteOne: deleteOne,
  put: put,
  patch: patch,
};

export default controller;