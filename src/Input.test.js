import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Input from './Input';
import {act} from 'react-dom/test-utils'

afterEach(cleanup);

jest.useFakeTimers();

test('Input using hooks', async () => {
  const w = render(<Input />);
  await act(async () => {
    fireEvent.change(w.getByTestId('foo'), {
      target: { value: 'bar' },
    });
  })
  
  expect(w.getByTestId('foo').value).toEqual('bar');
  expect(w.getByTestId('check').textContent).toEqual('isBar: yes');
});
