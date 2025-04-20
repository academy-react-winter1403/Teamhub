export interface LoginResponse {
    apiKey: string | null;
    phoneNumber: string | null;
    id: number;
    token: string | null;
    roles: string[] | null;
    message: string;
    success: boolean;
    errors: string | null; 
}

export interface SignupStepOne{
    "id": number,
    "message": string,
    "success": boolean,
    "errors": string[] | null
}

export interface SignupStepTwe{
    "ErrorType": string,
    "ErrorMessage": string[] | null,
    "StatusCode": number
}

export interface SignupStepThree{
    "ErrorType": string,
    "ErrorMessage": string[] | null,
    "StatusCode": number
}