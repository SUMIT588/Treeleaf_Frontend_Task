const error = (value, id) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  switch (id) {
    case "name":
      if (value.trim() === "") {
        return  "Name is required";
      } 
      break;

    case "phoneNumber":
      if (isNaN(value) && value.toString().length <= 7) {
        return  "Please enter a valid phone number";
      }
      break;

    case "email":
      if (!regex.test(value)) {
        return "Invalid email";
      }
      break;

    default:
      break;
  }

  return null

}


export default error;
