const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const goalService = {
    getGoals: async (userId) => {
        const response = await fetch(`${API_URL}/api/goals/${userId}`);
        return response.json();
    },

    createGoal: async (userId, goalData) => {
        const response = await fetch(`${API_URL}/api/goals/${userId}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(goalData),
        });
        return response.json();
    },

    updateGoal: async (userId, goalId, updatedData) => {
        const response = await fetch(`${API_URL}/api/goals/${userId}/${goalId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
        });
        return response.json();
    },

    deleteGoal: async (userId, goalId) => {
        return fetch(`${API_URL}/api/goals/${userId}/${goalId}`, {
            method: "DELETE",
        });
    },
};

export default goalService;
