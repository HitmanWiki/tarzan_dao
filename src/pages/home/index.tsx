import { FC } from 'react';

import BaseContainer from '@/components/basic/container';

import './index.less';

const DashboardPage: FC = () => {
  return (
    <BaseContainer className="home-page">
      <div className="body-home">
        <div className="item">
          <div>TARZAN Price</div>
          <div>$0.002</div>
        </div>

        <div className="item">
          <div>Market Cap</div>
          <div>$20,000,000</div>
        </div>

        <div className="item">
          <div>Total Value Locked</div>
          <div>$122,000.00</div>
        </div>

        <div className="item">
          <div>Treasury Balance</div>
          <div>$110,000.00</div>
        </div>

        <div className="item">
          <div>Total Funda Sent</div>
          <div>$10,000.00</div>
        </div>

        <div className="item">
          <div>TARZAN Burned</div>
          <div>$5,000.00</div>
        </div>
      </div>
    </BaseContainer>
  );
};

export default DashboardPage;
