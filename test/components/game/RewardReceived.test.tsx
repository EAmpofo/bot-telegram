import { render, screen, fireEvent } from '@testing-library/react';
import RewardReceived from '../../../src/components/game/RewardRecieved';


describe('RewardReceived Component', () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<RewardReceived onClose={mockOnClose} />);

    expect(screen.getByText('Username')).toBeInTheDocument();

    expect(screen.getByText('Defense Level 1')).toBeInTheDocument();

    expect(screen.getByAltText('badge')).toBeInTheDocument();

    expect(screen.getByAltText('Spear')).toBeInTheDocument();

    expect(screen.getByAltText('reward')).toBeInTheDocument();

    expect(screen.getByText('Start defense')).toBeInTheDocument();
  });

  it('calls the onClose function when the "Start defense" button is clicked', () => {
    render(<RewardReceived onClose={mockOnClose} />);

    const startDefenseButton = screen.getByText('Start defense');
    fireEvent.click(startDefenseButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('renders SVG icons correctly', () => {
    render(<RewardReceived onClose={mockOnClose} />);

  });
});
