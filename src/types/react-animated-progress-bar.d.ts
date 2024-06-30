declare module 'react-animated-progress-bar' {
    interface ProgressBarProps {
        width: string;
        height: string;
        fontColor: string;
        percentage: string;
        rectPadding: string;
        rectBorderRadius: string;
        trackPathColor: string;
        bgColor: string;
        trackBorderColor: string;
        rect?: boolean; // Add this line if rect is needed
      }
      
  
    const ProgressBar: React.ComponentType<ProgressBarProps>;
    export default ProgressBar;
  }