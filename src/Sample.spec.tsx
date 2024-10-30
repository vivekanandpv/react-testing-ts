import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sample from './Sample';
import userEvent from "@testing-library/user-event";

//  Please review:
//  https://testing-library.com/docs/queries/about
//  https://testing-library.com/docs/queries/about#priority

//  This is a life cycle method of testing
afterEach(() => {
  cleanup(); //  cleanup will reset the harness
});

describe('Sample Component should', () => {
  it('display default counter as zero', () => {
    render(<Sample />);

    const span = screen.getByTestId('counter-span');

    expect(span).toHaveTextContent('0');
  });

  it('increment the counter when increment is clicked', () => {
    render(<Sample />);

    const inc = screen.getByTestId('btn-inc');

    const span = screen.getByTestId('counter-span');

    fireEvent.click(inc);
    expect(span).toHaveTextContent('1');
  });

  it('decrement the counter when decrement is clicked', () => {
    render(<Sample />);

    const dec = screen.getByTestId('btn-dec');

    const span = screen.getByTestId('counter-span');

    fireEvent.click(dec);
    expect(span).toHaveTextContent('-1');
  });


  //  text input test
  it('relays the message that is typed input', () => {
    render(<Sample />);

    const input = screen.getByTestId('message-input');

    const span = screen.getByTestId('message-span');

    const message = 'Hello, world!';

    userEvent.type(input, message)

    expect(span).toHaveTextContent(message);
  });
});
