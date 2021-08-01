import React from 'react';
import { Grid, Alert } from 'react-bootstrap';

const ErrorMessage = () => {
  return(
    <Grid>
      <Alert bsStyle="warning">
        <strong>We're sorry!</strong> Something went wrong..
      </Alert>
    </Grid>
  )
}

export default ErrorMessage;
