
export  interface FilterValues{
    fullname: string;
    gender: string;
    nationality: string;
}


export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Street {
  name: string;
  number: number;
}

export interface Timezone {
  description: string;
  offset: string;
}

export interface Dob {
  age: number;
  date: string;
}

export interface Id {
  name: string;
  value: null | string;
}

export interface Location {
  city: string;
  coordinates: Coordinates;
  country: string;
  postcode: number;
  state: string;
  street: Street;
  timezone: Timezone;
}

export interface Login {
  md5: string;
  password: string;
  salt: string;
  sha1: string;
  sha256: string;
  username: string;
  uuid: string;
}

export interface Name {
  first: string;
  last: string;
  title?: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Registered {
  age: number;
  date: string;
}

export interface UserData {
  cell: string;
  dob: Dob;
  email: string;
  phone: string;
  gender: string;
  id: Id;
  location: Location;
  login: Login;
  name: Name;
  nat: string;
  picture: Picture;
  registered: Registered;
}

export interface ApiResponse {
  results: UserData[];
  error?: string;
}

export  interface UseContactsReturnType {
  data: UserData[];
  iserror: boolean;
  isload: boolean;
}

export interface ContactsProps {
  data: UserData[];
}