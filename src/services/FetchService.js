import { showBusyIndicator, hideBusyIndicator } from "../utils/utils";

export const get = ({ url, urlParam }) => {
    showBusyIndicator();
    return fetch(url).then((resp) => {
        hideBusyIndicator();
        if (resp.status === 200)
            return resp.json();
    });

}