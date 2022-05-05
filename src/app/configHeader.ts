import {Constants} from "./constants/constants";

export const configHeader=({headers:{
    'Authorization':"Bearer "+localStorage.getItem(Constants.TOKEN),
    'gatewaykey':'343C-ED0B-4137-B27E',
    'Access-Control-Allow-Origin': '*'
  }})
