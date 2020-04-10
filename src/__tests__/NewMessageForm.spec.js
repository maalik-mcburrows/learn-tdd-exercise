import React from 'react';
import{
    render,
    fireEvent,
    cleanup,
} from '@testing-library/react';
import NewMessageForm from '../components/newMessageForm';

describe('<NewMessageForm />', () => {
    let getByTestId;

    afterEach(cleanup);

    describe('clicking the send button', () => {
        let sendHandler;

        beforeEach(() => {
            sendHandler = jest.fn();
            ({ getByTestId } = render(<NewMessageForm onSend={sendHandler} />));

            fireEvent.change(
                getByTestId('messageText'),
                {
                    target: {
                        value: 'New message',
                    },
                },
            );

            fireEvent.click(getByTestId('sendButton'));
        });

        it('clears the text field', () => {
            expect(getByTestId('messageText').value).toEqual('');
        });

        it('calls the send handler', () => {
            expect(sendHandler).toHaveBeenCalledWith('New message');
        });
    });
});

//Got an 'fsevents is not a fxn error'? solution is '$ brew install watchman'