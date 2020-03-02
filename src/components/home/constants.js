const API_BASE_URL = 'https://api.edamam.com';
const API_APP_KEY = 'b17a326c937b31d61f448827dee723e3';
const API_APP_ID = 'b56b266a';
const API_SEARCH_PATH = '/search';
export const API_APP_ID_PARAM = 'app_id';
export const API_APP_KEY_PARAM = 'app_key';

export const API_AUTH_PARAMS = `${API_APP_ID_PARAM}=${API_APP_ID}&${API_APP_KEY_PARAM}=${API_APP_KEY}`
export const API_SEARCH_ENDPOINT = `${API_BASE_URL}${API_SEARCH_PATH}?${API_AUTH_PARAMS}`;
export const API_Q_PARAM = 'q';

export const API_FROM_PARAM = 'from';
export const API_TO_PARAM = 'to';
export const API_CUISINE_PARAM = 'cuisineType';
export const API_MEAL_PARAM = 'mealType';
export const API_DISH_PARAM = 'dishType';

export const CUISINE_US = 'American';
export const CUISINE_ASIA = 'Asian';
export const CUISINE_GB = 'British';
export const CUISINE_CARIB = 'Caribbean';
export const CUISINE_CEU = 'Central Europe';
export const CUISINE_CHINA = 'Chinese';
export const CUISINE_EEU = 'Eastern Europe';
export const CUISINE_FR = 'French';
export const CUISINE_INDIA = 'Indian';
export const CUISINE_ITALY = 'Italian';
export const CUISINE_JAPAN = 'Japanese';
export const CUISINE_KOSHER = 'Kosher';
export const CUISINE_MEDIT = 'Mediterranean';
export const CUISINE_MEX = 'Mexican';
export const CUISINE_MID_EAST = 'Middle Eastern';
export const CUISINE_NORDIC = 'Nordic';
export const CUISINE_SUS = 'South American';
export const CUISINE_SEA = 'South East Asian';
