// Workaround #16.3a — no React.StrictMode: the bundled framer-motion
// runtime keeps module-scope init state and throws on StrictMode's
// dev double-mount ("mix Motion versions").
import { createRoot } from 'react-dom/client';
import './tokens.css';
import './framer/_responsive-runtime.css';
import './index.css';
import './live-breakpoints.css';
import App from './App';

createRoot(document.getElementById('root')!).render(<App />);
