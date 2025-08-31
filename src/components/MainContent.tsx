import React from 'react';
import LeftColumn from './LeftColumn';
import MiddleColumn from './MiddleColumn';
import RightColumn from './RightColumn';

const MainContent: React.FC<{ person: any }> = ({ person }) => {
  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-3">
          <LeftColumn />
        </div>
        <div className="col-md-6">
          <MiddleColumn person={person} />
        </div>
        <div className="col-md-3">
          <RightColumn person={person} />
        </div>
      </div>
    </div>
  );
}

export default MainContent;
