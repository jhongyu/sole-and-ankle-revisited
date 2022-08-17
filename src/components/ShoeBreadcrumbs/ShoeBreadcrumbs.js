import React from "react";

import Breadcrumbs from "../Breadcrumbs";

const ShoeBreadcrumbs = () => (
  <Breadcrumbs>
    <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
    <Breadcrumbs.Crumb href="/sale/shoes">
      Shoes
    </Breadcrumbs.Crumb>
  </Breadcrumbs>
);

export default ShoeBreadcrumbs;
