import { useHistory } from "react-router-dom";
import RoutesName from "../navigation/routesUtils";
import { clearAllStorageData } from "./asyncStorage";

export const useGoToLogin = ({ error, status }: { status?: number, error: unknown }) => {
    const { push } = useHistory();
    if (status === 403 || (error && (error as Error).message === 'illegal')) {
        clearAllStorageData()
        setTimeout(() => {
            push(RoutesName["/login"]);
        }, 100)
    }
}