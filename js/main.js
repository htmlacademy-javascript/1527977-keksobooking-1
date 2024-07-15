import { getMap } from './map.js';
import './form.js';
import { lockoutPage, lockoutForm, lockoutFilters } from './application.js';
import { getData } from './api.js';
import { errorLoadingNotice } from './notice.js';
import { processingData} from './data.js';

lockoutPage();

const onGetDataSuccess = (data) => {
  lockoutFilters();
  processingData(data);
};

getMap.then(lockoutForm())
  .then(getData(onGetDataSuccess, errorLoadingNotice));
