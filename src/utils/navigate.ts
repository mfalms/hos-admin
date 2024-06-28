import { NavigateFunction } from "react-router-dom";

let navigate: NavigateFunction;

export const setNavigate = (nav: NavigateFunction) => {
  navigate = nav;
};

export const navigateTo = (path: string) => {
  if (navigate) {
    navigate(path);
  } else {
    console.error("Navigate function is not defined");
  }
};

export const redirectTo = (path: string) => {
  if (navigate) {
    navigate(path, { replace: true });
  } else {
    console.error("Navigate function is not defined");
  }
};

export const goBack = () => {
  if (navigate) {
    navigate(-1);
  } else {
    console.error("Navigate function is not defined");
  }
};
