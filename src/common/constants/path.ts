export enum RouteUrl {
  Base = "/",
  Product = "/product",
  SearchResult = "/search-result",
  Login = "/login",
  Register = "/register",
}

export const ApiUrl = {
  base: "http://127.0.0.1:8000/api",
  search: "/search",
  accounts: {
    login: "/accounts/login/",
    logout: "/accounts/logout/",
    passwordChange: "/accounts/password/change/",
    register: "/accounts/register/",
  },
  product: {
    hot: "/product/hot/",
    magazine: "/product/magazine/",
    userMagazine: "/product/user-magazine/",
  },
};
