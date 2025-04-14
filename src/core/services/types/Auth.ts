export interface LoginResponse {
    apiKey: string | null;
    phoneNumber: string | null;
    id: number;
    token: string | null;
    roles: string[] | null;
    message: string;
    success: boolean;
    errors: string | null; // یا می‌تونی دقیق‌ترش کنی اگه بدونی errors چه ساختاری داره
}
