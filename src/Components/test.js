import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  const props = {
    name: 'Juanse L',
    username: 'juansel',
    id: '1'
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it('renders correctly', () => {
    const { getByText } = render(<Card {...props} />);
    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(props.username)).toBeInTheDocument();
  });

  it('adds to favorites when the button is clicked', () => {
    const { getByRole } = render(<Card {...props} />);
    const button = getByRole('button');
    fireEvent.click(button);
    expect(localStorage.getItem('favorites')).toEqual(JSON.stringify([{ name: props.name, username: props.username, id: props.id }]));
  });

  it('removes from favorites when the button is clicked twice', () => {
    const { getByRole } = render(<Card {...props} />);
    const button = getByRole('button');
    fireEvent.click(button);
    fireEvent.click(button);
    expect(localStorage.getItem('favorites')).toEqual(JSON.stringify([]));
  });

  it('displays "Add to fav" when the card is not a favorite', () => {
    const { getByText } = render(<Card {...props} />);
    expect(getByText('Add to fav')).toBeInTheDocument();
  });

  it('displays "Remove from fav" when the card is a favorite', () => {
    const favorites = [{ name: props.name, username: props.username, id: props.id }];
    localStorage.setItem('favorites', JSON.stringify(favorites));
    const { getByText } = render(<Card {...props} />);
    expect(getByText('Remove from fav')).toBeInTheDocument();
  });
});
