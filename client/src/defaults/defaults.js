const Defaults = {};

Defaults.UserData = {
  nicknames: [],
  username: "",
  password: "",
  birthday: new Date(),
  single: true,
  cartype: 0,
  picture: "",
  firstname: "",
  lastname: "",
  aboutme: ""
};

Defaults.Day = {
  date: "",
  events: [],
  users: [],
  rating: 0
};

Defaults.event = {
  name: "",
  eventkey: "",
  icon: "icon-bag-16",
  cars: {},
  items: {},
  time: new Date(),
  moneylink: ""
};

module.exports = Defaults;
