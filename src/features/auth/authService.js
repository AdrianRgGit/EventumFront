import apiClient from "../../api/apiClient";

const register = async (userData) => {
    const res = await apiClient.post("register", userData);
    return res.data;
};

const login = async (userData) => {
    const res = await apiClient.post("/users/login", userData);
    if (res.data) {
        localStorage.setItem("userConnected", JSON.stringify(res.data.user));
        localStorage.setItem("userEvents", JSON.stringify(res.data.user.events));
        localStorage.setItem("userRole", JSON.stringify(res.data.user.role));
        localStorage.setItem("token", res.data.token);
    }
    return res.data;
};

const logout = async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    const res = await apiClient.delete("logout", {
        headers: {
            Authorization: token,
        },
    });
    if (res.data) {
        localStorage.clear();
    }
    return res.data;
};

const authService = {
    register,
    login,
    logout,
};

export default authService;
