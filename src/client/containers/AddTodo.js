import React from 'react';
import { connect } from 'react-redux';
import { Col, Form, FormGroup, ControlLabel } from 'react-bootstrap';
import { addTodo } from '../actions';
import Filters from '../components/Filters';

let AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <div className="row">
        <Col md={12}>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              dispatch(addTodo(input.value));
              input.value = '';
            }
          }
          >
            <FormGroup controlId="formHorizontalText">
              <ControlLabel>
                New Todo
              </ControlLabel>
              <input
                className="form-control"
                ref={(node) => {
                  input = node;
                }
               }
              />
            </FormGroup>
            <button type="submit" className="btn btn-primary pull-right">
              Add Todo
            </button>
            <div className="pull-left">
              <Filters />
            </div>
          </Form>
        </Col>
      </div>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;
