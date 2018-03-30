import React from 'react';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';

const SearchForm = () => (
  <Form inline>
    <FormGroup controlId="formInlineName">
      <ControlLabel>Name</ControlLabel>{' '}
      <FormControl type="text" placeholder="Jane Doe" />
    </FormGroup>{' '}
    <FormGroup controlId="formInlineEmail">
      <ControlLabel>Email</ControlLabel>{' '}
      <FormControl type="email" placeholder="jane.doe@example.com" />
    </FormGroup>{' '}
    <Button type="submit">Send invitation</Button>
  </Form>
)

export default SearchForm;
