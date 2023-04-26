// This exports the UserInfo class so it can be imported and used in other files.
export default class UserInfo {
  // The constructor method accepts options for nameSelector and jobSelector. These will be used to select elements from the DOM.
  constructor({ nameSelector, jobSelector }) {
    // This line selects an element from the DOM using the nameSelector option and assigns it to the _nameElement property.
    this._nameElement = document.querySelector(nameSelector);
    // This line selects an element from the DOM using the jobSelector option and assigns it to the _jobElement property.
    this._jobElement = document.querySelector(jobSelector);
  }

  // The getUserInfo method returns an object with name and job properties.
  getUserInfo() {
    // This starts the object that will be returned.
    return {
      // The name property is set to the text content of the _nameElement.
      name: this._nameElement.textContent,
      // The job property is set to the text content of the _jobElement.
      job: this._jobElement.textContent,
    };
  }

  // The setUserInfo method accepts an object with name and job properties.
  setUserInfo({ name, job }) {
    // This line updates the text content of _nameElement to the name value passed to the method.
    this._nameElement.textContent = name;
    // This line updates the text content of _jobElement to the job value passed to the method.
    this._jobElement.textContent = job;
  }
}
