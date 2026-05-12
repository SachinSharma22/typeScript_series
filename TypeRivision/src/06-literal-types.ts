// String literal types
let direction : "east" | "west" | "north" | "south";
direction = "east";

// Numeric Literal types
let diceRoll = 1 | 2 | 3 | 4 | 5 | 6; 

// Combine literal types
type SuccessResponse = {
    status : "success",
    data: any
}

type ErrorResponse = {
    status: "error",
    message: string
};

type ApiResponse = SuccessResponse | ErrorResponse
