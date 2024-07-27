import {
  square,
  areaOfCircle,
  printMessage,
  getGrade,
  getRandomNumber,
  // getUsers,
} from './utils';

// import axios from 'axios';

// jest.mock('axios');

describe('Utils should', () => {
  it('square a given number', () => {
    expect(square(5)).toEqual(25);
  });

  it('compute the radius of a unit circle', () => {
    expect(areaOfCircle(1)).toBeCloseTo(3.14159265, 4);
  });

  it('throw the exception for negative radius', () => {
    expect(() => areaOfCircle(-1)).toThrowError('negative radius');
  });

  [
    {
      point: 0,
      remark: 'poor',
    },
    {
      point: -90,
      remark: 'none',
    },
    {
      point: 2,
      remark: 'average',
    },
    {
      point: 4,
      remark: 'outstanding',
    },
  ].forEach((c) => {
    it(`evaluates point ${c.point} as ${c.remark}`, () => {
      expect(getGrade(c.point)).toEqual(c.remark);
    });
  });

  it('return a random number (async)', async () => {
    const randomNumber = await getRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(1);
  });

  it('return a random number (promise)', () => {
    return getRandomNumber().then((v) => {
      expect(v).toBeGreaterThanOrEqual(0);
      expect(v).toBeLessThanOrEqual(1);
    });
  });

  //  general mock function
  it('squares a number in a general mock', () => {
    const squareMockFunction = jest.fn((n) => {
      console.log('mock square function');
      return n * n;
    });

    expect(squareMockFunction(5)).toEqual(25);
  });

  //  mocking the axios
  // it('get users from the api', async () => {
  //   //  load the mock
  //   (axios.get as any).mockImplementation(() => {
  //     console.log('from mock axios');
  //     return Promise.resolve({ title: 'users', count: 12 });
  //   });

  //   const response = await getUsers();

  //   expect(response.data.count).toEqual(12);
  //   expect(response.data.title).toEqual('users');
  // });
});
