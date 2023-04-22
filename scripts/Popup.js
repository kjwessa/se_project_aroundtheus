//TODO Create the Popup class

// TODO Follow the Practicum instructions below to create the Popup class
// Create the Popup class that opens and closes the popup window, as per the following requirements:
// The constructor has a single parameter, which is the popup selector.
// It stores the public methods open() and close() that will open and close the popup.
// It stores a private method named _handleEscClose() that stores the logic for closing the popup by pressing the Esc key.
// It stores a public method named setEventListeners() that adds a click event listener to the close icon of the popup. The modal window should also close when users click on the shaded area around the form.

// TODO Utilize the pseudocode below to create the Popup class
// Define (and export) a new class named Popup
// Create a constructor for Popup with parameter:
// An object with property (popupSelector)
// Find and store the popup element using popupSelector in the property _popupElement
// Bind the _handleEscape method to the current instance and store it in the property _handleEscape
// Define method open
// Add the class "modal_opened" to _popupElement's class list
// Add an event listener for the "keydown" event on the document, using the _handleEscape method as the callback
// Define method close
// Remove the class "modal_opened" from _popupElement's class list
// Remove the "keydown" event listener from the document, using the _handleEscape method as the callback
// Define private method _handleEscape with parameter (evt)
// If the key property of evt is "Escape", call the close method
// Define private method _handleOverlay with parameter (evt)
//If the target element of evt has the class "modal_opened" or "modal__close", call the close method
// Define method setEventListeners
// Add an event listener for the "mousedown" event on _popupElement, using the _handleOverlay method as the callback
