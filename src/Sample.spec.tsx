import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sample from './Sample';

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
});
