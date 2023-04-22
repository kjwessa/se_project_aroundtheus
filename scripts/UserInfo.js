//TODO Create the UserInfo class

// TODO Follow the Practicum instructions below to create the UserInfo class
// Creating the UserInfo class
// The UserInfo class is responsible for rendering information about the user on the page. This class should:
// Take an object with the selectors of two elements into the constructor: one containing the user's name, and another containing the user's job.
// Store a public method named getUserInfo(), which returns an object with information about the user. This method will be handy for cases when it's necessary to display the user data in the open form.
// Store a public method named setUserInfo(), which takes new user data and adds it on the page.
// Create an instance of the UserInfo class in index.js. Use its method setUserInfo() to handle the form submission inside an instance of the PopupWithForm class.

//TODO Utilize the pseudocode below to create the UserInfo class
// Define a new class named UserInfo
// Create a constructor for UserInfo with parameter {userName, userJon, userAvatar}
// An object with properties:
// Store the userName property in the property _userName
// Store the userJob property in the property _userDescription
// Store the userAvatar property in the property _userAvatar
// Define method getUserInfo
// Return an object with properties (name, about)
// name: the text content of _userName
// about: the text content of _userDescription
// Define method setUserInfo with parameter (value)
// Set the text content of _userName to the name property of value
// Set the text content of _userDescription to the about property of value
// Define method setAvatar with parameter (value)
// Set the alt attribute of _userAvatar to the result of calling getUserInfo()
// Set the source attribute of _userAvatar to value
// Define method getAvatar
// Return the source attribute of _userAvatar
