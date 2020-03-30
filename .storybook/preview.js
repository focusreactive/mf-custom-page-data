import '@storybook/addon-console';
import { ThemeProvider } from 'emotion-theming';
import { useThemes } from '@react-theming/storybook-addon';
import { theme } from '../src/theme';

useThemes(ThemeProvider, [theme]);