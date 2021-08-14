import axiosClient from ".";

export const conversationApi = {
    createNewConversation(body) {
        const url = "/api/conversations";
        return axiosClient.post(url, body);
    }
};