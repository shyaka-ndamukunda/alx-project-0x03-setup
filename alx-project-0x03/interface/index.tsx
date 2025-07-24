    // interface/index.tsx
    import { ReactNode } from 'react'; // Import ReactNode

    export interface ButtonProps {
      buttonLabel: string
      buttonSize?: string
      buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
      action?: () => void
    }

    export interface LayoutProps {
      children: ReactNode; // Now using imported ReactNode
    }

    export interface PageRouteProps {
      pageRoute: string
    }
    