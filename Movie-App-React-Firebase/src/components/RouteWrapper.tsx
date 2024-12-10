import React, { useEffect } from "react";

interface RouteWrapperProps {
  title: string;
  children: React.ReactNode;
}

const RouteWrapper: React.FC<RouteWrapperProps> = ({ title, children }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return <>{children}</>;
};

export default RouteWrapper;
