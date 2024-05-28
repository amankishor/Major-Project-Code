// services/apiService.js
import axios from 'axios';

const API_URL = 'http://ec2-16-170-213-55.eu-north-1.compute.amazonaws.com/'; // Update with your Flask API URL

const apiService = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'multipart/form-data', // Since you're sending images
  },
});

export const diagnoseNoFilter = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await apiService.post('/no_filter', formData);
    return response.data;
  } catch (error) {
    throw error.response.data.error || 'An error occurred';
  }
};

export const diagnoseWithFilter = async (imageFile) => {
  try {
    const formData = new FormData();
    formData.append('image', imageFile);

    const response = await apiService.post('/with_filter', formData);
    return response.data;
  } catch (error) {
    throw error.response.data.error || 'An error occurred';
  }
};

export const checkHealth = async () => {
  try {
    const response = await apiService.get('/health');
    return response.data;
  } catch (error) {
    throw error.response.data.error || 'An error occurred';
  }
};
