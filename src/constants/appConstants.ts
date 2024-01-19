export const APP_NAME = "Super app";
export const WIDGETS_LABEL = "Widgets";

/* usage
// Somewhere in your app
import { APP_NAME, WIDGETS_LABEL } from '@/constants/appConstants'
console.log(APP_NAME)
// You can also grab all named exports from the file
import * as APP_CONSTANTS from '@/constants/appConstants'
console.log(APP_CONSTANTS.WIDGETS_LABEL)
*/


export const apiStatus = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

/*     //usage
    import { apiStatus } from '@/constants/appConstants'
    console.log(apiStatus.PENDING) */
