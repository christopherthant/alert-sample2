// redux types
import { ADD_TO_ALERT_LIST, REMOVE_FROM_ALERT_LIST } from "../types";

// generate random number
function generateRandom(maxLimit = 100) {
  let rand = Math.random() * maxLimit;
  rand = Math.floor(rand); // 99
  return rand;
}

const alertReducer = (
  state = {
    items: [],
  },
  { type, payloads }
) => {
  switch (type) {
    // dispatch ADD_TO_ALERT_LIST
    case ADD_TO_ALERT_LIST:
      // check there is no duplicate alertId
      var already_exist_numbers = state.items.map((item) => item.alertId);
      var new_num = generateRandom();
      // while the new_num is already existed, generate another number
      while (already_exist_numbers.includes(new_num)) {
        new_num = generateRandom();
      }

      // add new alert to the alertList
      const newItem = {
        alertId: payloads.newAlert.alertId || new_num,
        alertType: payloads.newAlert.alertType,
        alertTitle: payloads.newAlert.alertTitle || payloads.newAlert.alertType,
        text: payloads.newAlert.text,
        timeLimit: payloads.newAlert.timeLimit || 3000,
        link: payloads.newAlert.link,
      };
      return {
        items: (state.items = [...state.items, newItem]),
      };
    // dispatch REMOVE_FROM_ALERT_LIST
    case REMOVE_FROM_ALERT_LIST:
      // remove the alert from the alertList
      return {
        items: (state.items = state.items.filter(
          (item) => item.alertId !== payloads.currentAlertId
        )),
      };
    default:
      return state;
  }
};

export default alertReducer;
