import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Register from './Register';

describe('Register', () => {
  it('should fires login function when submited', async () => {
    const register = jest.fn();
    const { getByPlaceholderText, getByTestId } = render(
      <MemoryRouter>
        <Register auth={{ fetching: false }} register={register} />
      </MemoryRouter>,
    );

    const name = getByPlaceholderText('Nome Completo');
    const cpf = getByPlaceholderText('Cpf');
    const email = getByPlaceholderText('E-mail');
    const password = getByPlaceholderText('Senha');

    await act(async () => {
      await fireEvent.change(cpf, { target: { value: '40903912880' } });
      await fireEvent.change(name, { target: { value: 'Romulo silva' } });
      await fireEvent.change(email, { target: { value: 'bla@blabla.com' } });
      await fireEvent.change(password, { target: { value: '12333' } });
    });

    await act(async () => {
      fireEvent.submit(getByTestId('form'));
    });

    expect(register).toBeCalled();
  });
});
