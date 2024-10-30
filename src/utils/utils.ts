import axios from 'axios';

//  return-value
export const square = (n: number) => n * n;

//  exception
export const areaOfCircle = (r: number) => {
  if (r < 0) {
    throw new Error('negative radius');
  }

  return Math.PI * r * r;
};

//  side-effect
export const printMessage = (m: string) => console.log(m);

//  conditional output
export const getGrade = (n: number) => {
  switch (n) {
    case 0:
      return 'poor';
    case 1:
      return 'below average';
    case 2:
      return 'average';
    case 3:
      return 'above average';
    case 4:
      return 'outstanding';
    default:
      return 'none';
  }
};

//  asynchronous function
export const getRandomNumber = () => {
  return new Promise<number>((resolve, reject) => {
    setTimeout(() => {
      resolve(Math.random());
    }, 2000);
  });
};

 // real api call
export const getUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};
