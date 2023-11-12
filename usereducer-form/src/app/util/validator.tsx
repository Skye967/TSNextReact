const emailReg =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export interface Action {
  type: "firstName" | "lastName" | "email";
  payload: string;
}

export function validator(action: Action) {
  const { type, payload } = action;
  const data: { value: string; error: string } = {
    value: payload,
    error: "",
  };

  switch (type) {
    case "firstName":
      if (payload.length < 3 || !/^[a-zA-Z]+$/.test(payload)) {
        data.error = "Invalid first name!";
      } else {
        data.error = "";
      }
      break;
    case "lastName":
      if (payload.length < 3 || !/^[a-zA-Z]+$/.test(payload)) {
        data.error = "Invalid last name!";
      } else {
        data.error = "";
      }
      break;
    case "email":
      if (!emailReg.test(payload)) {
        data.error = "invalid email!";
      } else {
        data.error = "";
      }
      break;
  }
  return data;
}
