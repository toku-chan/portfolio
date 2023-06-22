import React from 'react';
import { render, screen } from '@testing-library/react';
import { Skills } from './Skills';

describe('Skills', () => {
  test('skillsが描画されている', () => {
    render(<Skills />);
    expect(screen.getByTestId('skills')).toBeInTheDocument();
  });
});
