const BASE_URL = "https://alibackend.duckdns.org";

class ApiClient {
  constructor() {
    this.baseURL = BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);

      // Handle non-JSON responses (like HTML error pages)
      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        await response.text();
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || `HTTP error! status: ${response.status}`
        );
      }

      return data;
    } catch (error) {
      // Handle network errors and parsing errors
      if (
        error.message.includes("DoesNotExist") ||
        error.message.includes("User matching query does not exist")
      ) {
        throw new Error("User not found. Please sign up first.");
      }
      throw error;
    }
  }

  // Auth endpoints
  async signup(credentials) {
    return this.request("/authentication_app/signup/", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  }

  async signin(credentials) {
    return this.request("/authentication_app/signin/", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  }

  async verifyOtp(data) {
    return this.request("/authentication_app/verify_otp/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async resendOtp(data) {
    return this.request("/authentication_app/resend_otp/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async logout() {
    return this.request("/authentication_app/logout/", {
      method: "POST",
    });
  }

  // User management endpoints
  async addUser(data) {
    return this.request("/company_user_management/add_user/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async getUserList() {
    return this.request("/company_user_management/user_list/");
  }

  // Subscription endpoints
  async buySubscription(data) {
    return this.request("/subscription/buy_subscription/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  async updateSubscription(data) {
    return this.request("/subscription/update_subscription/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Support endpoints
  async sendSupportRequest(data) {
    return this.request("/terms_and_support/support/", {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // Chat endpoints
  async createChat(message) {
    return this.request("/chat/create_chat/", {
      method: "POST",
      body: message,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  async addMessageToChat(message) {
    return this.request("/chat/add_message_to_chat/", {
      method: "POST",
      body: message,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  async getUsersChatList() {
    return this.request("/chat/get_users_chat_list/");
  }
}

export const apiClient = new ApiClient();
