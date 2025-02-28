import React from 'react';

// react-bootstrap
import { Card } from 'react-bootstrap';

// assets
import sidebarImages from '../../../../assets/images/sidebar.png';

// ==============================|| NAV CARD ||============================== //

let itemTarget = '_blank';

const NavCard = () => {
  return (
    <React.Fragment>
      <Card className="bg-transparent border">
        <Card.Body className="p-2 text-center">
          <img src={sidebarImages} className="img-radius " alt="User-Profile" />
          <h5> Pro</h5>
          <p>Checkout Premium Features</p>
          <a
            href="https://codedthemes.com/item/gradient-able-reactjs-admin-dashboard/?utm_source=free_demo&utm_medium=codedthemes&utm_campaign=button_download_premium"
            target={itemTarget}
            className="btn text-white btn-primary"
          >
            Premium  version
          </a>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

export default NavCard;
