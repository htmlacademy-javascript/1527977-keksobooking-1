import { BASE_URL, Route, Method, ErrorText } from './constants.js';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(
      `${BASE_URL}${Route.GET_DATA}`,
    );

    if (!response.ok) {
      throw new Error(ErrorText.GET_DATA);
    }

    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSuccess, onFail, body) => {
  try {
    const response = await fetch(
      BASE_URL,
      {
        method: Method.POST,
        body,
      }
    );

    if (!response.ok) {
      throw new Error(ErrorText.SEND_DATA);
    }

    onSuccess();
  } catch (error) {
    onFail(error.message);
  }
};

export { getData, sendData };
