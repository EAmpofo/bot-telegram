import { render, screen, fireEvent } from '@testing-library/react';
import GameHomeScreen from '../../../src/components/game/GameHomeScreen';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';



jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

describe('GameHomeScreen Component', () => {
  const mockNavigate = jest.fn();

  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useSelector as unknown as jest.Mock).mockReturnValue({
      userCountry: { flag: 'test-flag.png' },
      tutorialFinished: false,
      reward: 1000,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly with initial state', () => {
    render(<GameHomeScreen />);

    expect(screen.getByText('Username')).toBeInTheDocument();

    expect(screen.getByText('Defense Level 0')).toBeInTheDocument();

    expect(screen.getByAltText('alien')).toBeInTheDocument();

    expect(screen.getByAltText('flag')).toBeInTheDocument();
  });

  it('navigates to the correct routes when icons are clicked', () => {
    render(<GameHomeScreen />);

    const homeIconButton = screen.getByText('Home');
    fireEvent.click(homeIconButton);
    expect(mockNavigate).toHaveBeenCalledWith('/game');

    const defenseIconButton = screen.getByText('Defense');
    fireEvent.click(defenseIconButton);
    expect(mockNavigate).toHaveBeenCalledWith('/defense');

    const missionIconButton = screen.getByText('Missions');
    fireEvent.click(missionIconButton);
    expect(mockNavigate).toHaveBeenCalledWith('/missions');

    const troopsIconButton = screen.getByText('Troops');
    fireEvent.click(troopsIconButton);
    expect(mockNavigate).toHaveBeenCalledWith('/troops');
  });

  it('handles alien click and updates points', () => {
    render(<GameHomeScreen />);

    const alienImage = screen.getByAltText('alien');
    fireEvent.click(alienImage);

    expect(screen.getByText('+3')).toBeInTheDocument();
  });

  it('shows and hides level-up alert correctly', () => {
    (useSelector as unknown as jest.Mock).mockReturnValue({
      userCountry: { flag: 'test-flag.png' },
      tutorialFinished: true,
      reward: 1000,
    });

    render(<GameHomeScreen />);

    expect(screen.getByText('Level up!')).toBeInTheDocument();

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);

    expect(screen.queryByText('Level up!')).not.toBeInTheDocument();
  });
});
