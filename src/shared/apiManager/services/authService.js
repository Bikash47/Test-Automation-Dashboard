import ApiClient from "../APIClient";
import { DASHBOARD_API } from "../RestServicesURL";

let apiClient; //= new ApiClient();
//
export class AuthService {
  static dashboard(data) {
    debugger; //
    apiClient = new ApiClient();
    return apiClient.post(DASHBOARD_API, data);
  }

 
}
