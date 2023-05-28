import axios from '../../../../api/axios';
import useAuth from './useAuth';
import Cookies from "universal-cookie";
const cookies = new Cookies();
const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const body = {
        refresh: cookies.get('refresh')
    }
    const refresh = async () => {
        const response = await axios.post("auth/token/refresh/", body,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${cookies.get('access')}`
                },
                withCredentials: true
            }
        ).catch(err => {
            if (err) {
                window.localStorage.setItem("isLoggedIn", "false");
            }
        })
        cookies.set('access', response?.data?.access)
        setAuth(prev => {
            return { ...prev, accessToken: response?.data?.access }
        });
        return response.data.access;
    }
    return refresh;
};

export default useRefreshToken;