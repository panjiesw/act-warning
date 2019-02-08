import React from 'react';
import { render, fireEvent, cleanup } from 'react-testing-library';
import Input from './Input';

afterEach(cleanup);

jest.useFakeTimers();

test('Input using hooks', done => {
  const w = render(<Input />);

  fireEvent.change(w.getByTestId('foo'), {
    target: { value: 'bar' },
  });

  process.nextTick(() => {
    expect(w.getByTestId('foo').value).toEqual('bar');
    expect(w.getByTestId('check').textContent).toEqual('isBar: yes');
    done();
  });
});
