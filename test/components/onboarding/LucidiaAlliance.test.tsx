import { render, screen, waitFor } from '@testing-library/react';
import LucidiaAlliance from '../../../src/components/onboading/LucidiaAlliance';
// import { CircularProgress } from '@mui/material';

// Mock the UfoOverlay and IconBox components
jest.mock('../shared/UfoOverlay', () => () => <div data-testid="ufo-overlay" />);
jest.mock('../shared/IconBox', () => ({ icon, className }: { icon: React.ReactNode, className: string }) => (
  <div data-testid="icon-box" className={className}>
    {icon}
  </div>
));



describe('LucidiaAlliance Component', () => {
  const mockOnTimeout = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    render(<LucidiaAlliance onTimeout={mockOnTimeout} />);

    expect(screen.getByTestId('ufo-overlay')).toBeInTheDocument();

    expect(screen.getByRole('progressbar')).toBeInTheDocument();

    expect(screen.getByText('The Lucidia Alliance')).toBeInTheDocument();

    expect(screen.getByText("Let's win together!")).toBeInTheDocument();

    expect(screen.getAllByTestId('icon-box')).toHaveLength(4);
  });

//   it('calls onTimeout after 3 seconds', async () => {
//     render(<LucidiaAlliance onTimeout={mockOnTimeout} />);

//     await waitFor(() => expect(mockOnTimeout).toHaveBeenCalledTimes(1), { timeout: 3000 });
//   });
test('calls onTimeout after 3 seconds', async () => {
    const mockOnTimeout = jest.fn();
    render(<LucidiaAlliance onTimeout={mockOnTimeout} />);
  
    await waitFor(() => expect(mockOnTimeout).toHaveBeenCalledTimes(1), { timeout: 3000 });
  });
  
});
