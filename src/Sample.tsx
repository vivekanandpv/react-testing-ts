import React, {useState} from 'react';

const Sample = () => {
    const [counter, setCounter] = useState(0);

    const [message, setMessage] = React.useState<string>('');


    const increment = () => {
        setCounter((v) => v + 1);
    };

    const decrement = () => {
        setCounter((v) => v - 1);
    };
    return (
        <>
            <h3>
                Counter: <span data-testid='counter-span'>{counter}</span>
            </h3>

            <button
                data-testid='btn-inc'
                className='btn btn-primary me-4'
                onClick={increment}
            >
                Increment
            </button>
            <button
                data-testid='btn-dec'
                className='btn btn-primary'
                onClick={decrement}
            >
                Decrement
            </button>

            <hr/>
            <h4 className='mb-5'>Message: <span data-testid='message-span'>{message}</span></h4>
            <input type="text" className="form-control" data-testid='message-input' onInput={(e) => setMessage(_ => (e.target as HTMLInputElement).value)}/>
        </>
    );
};

export default Sample;
