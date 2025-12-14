import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList.jsx';

describe('TodoList Component', () => {
  // Test 1: Initial render
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
  });

  // Test 2: Add a new todo
  test('adds a new todo', async () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText('Add a new todo');
    const button = screen.getByText('Add');

    await userEvent.type(input, 'New Todo');
    fireEvent.click(button);

    expect(screen.getByText('New Todo')).toBeInTheDocument();
  });

  // Test 3: Toggle todo completion
  test('toggles todo completion', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');

    // Click to complete
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: line-through');

    // Click to uncomplete
    fireEvent.click(todo);
    expect(todo).toHaveStyle('text-decoration: none');
  });

  // Test 4: Delete a todo
  test('deletes a todo', () => {
    render(<TodoList />);
    const todo = screen.getByText('Learn React');
    const deleteButton = screen.getAllByText('Delete')[0];

    fireEvent.click(deleteButton);
    expect(todo).not.toBeInTheDocument();
  });
});
