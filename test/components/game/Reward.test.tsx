import { render, screen, fireEvent } from '@testing-library/react';
import Reward from '../../../src/components/game/Reward';

describe('Reward Component', () => {
  it('renders correctly', () => {
    render(<Reward onReceive={() => {}} />);

    expect(screen.getByText('Username')).toBeInTheDocument();

    expect(screen.getByText('Defense Level 0')).toBeInTheDocument();
  
    expect(screen.getByText('Receive a gift')).toBeInTheDocument();
  });

  it('calls the onReceive function when the button is clicked', () => {
    const onReceiveMock = jest.fn();
    render(<Reward onReceive={onReceiveMock} />);

    const button = screen.getByText('Receive a gift');
    fireEvent.click(button);

    expect(onReceiveMock).toHaveBeenCalledTimes(1);
  });
});
