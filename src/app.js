class UI{
    constructor() {
        this.userid = document.getElementById("userid");
        this.userForm = document.getElementById("user-form");
    }

submitUserForm() {
    console.log("inside method");
    const value = this.userid.value;
    console.log("user id"+value);
    if(value==='' || value < 0){
        alert("Please enter a user id");
    }
}
}
function eventListeners(){
    const userForm = document.getElementById("user-form");

    const ui = new UI();

    userForm.addEventListener("submit",function(event){
        event.preventDefault();
        ui.submitUserForm();
    });
}
