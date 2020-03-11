import buildUrl from 'build-url';
import axios from 'axios';

import {
 API_BASE_URL,
 PATH_CATEGORIES
} from './constants';

const dataFetcher = {
    async getMealCategories() {
        const queryUrl = buildUrl(API_BASE_URL, {
            path: PATH_CATEGORIES,
        });
    
        return await axios.get(queryUrl);
    }

};

export default dataFetcher;
