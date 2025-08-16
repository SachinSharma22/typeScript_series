// 7. Enums

// Define an enum Role with values "Admin", "User", "Guest".
// Write a function checkRole(role: Role) that prints different messages depending on the role.

enum Role {
  Admin = "Admin",
  User = "User",
  Guest = "Guest"
}

function checkRole(role: Role): void {
  if (role === Role.Admin) {
    console.log("Welcome Admin! You have full access.");
  } else if (role === Role.User) {
    console.log("Welcome User! You have limited access.");
  } else if (role === Role.Guest) {
    console.log("Welcome Guest! Please sign up for more features.");
  }
}

// Example usage
checkRole(Role.Admin); // Welcome Admin! You have full access.
checkRole(Role.User);  // Welcome User! You have limited access.
checkRole(Role.Guest); // Welcome Guest! Please sign up for more features.
