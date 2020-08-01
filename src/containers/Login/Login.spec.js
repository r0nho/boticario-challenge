import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from './Login';

describe('Login', () => {
  it('should fires login function when submited', async () => {
    const login = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <Login auth={{ fetching: false }} login={login} />
      </MemoryRouter>,
    );
    const email = getByPlaceholderText('E-mail');
    const password = getByPlaceholderText('Senha');

    await act(async () => {
      await fireEvent.change(email, { target: { value: 'bla@blabla.com' } });
      await fireEvent.change(password, { target: { value: '123' } });
    });

    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    });

    expect(login).toBeCalledWith({ email: 'bla@blabla.com', password: '123' });
  });
});
