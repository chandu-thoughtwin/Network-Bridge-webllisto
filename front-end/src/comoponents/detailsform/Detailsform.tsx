import React, { useState } from "react";
import "./detailsform.scss";
import { Form, Button, FloatingLabel } from "react-bootstrap";

function Detailsform() {
  const [formDetails, setFormDetails] = useState({
    assetFrom: "",
    assetTo: "",
    asset: "",
    amount: "",
    address: "",
  });

  const submitForm = (e: any) => {
    e.preventDefault();
    setFormDetails({
      assetFrom: "",
      assetTo: "",
      asset: "",
      amount: "",
      address: "",
    });
  };

  return (
    <>
      <div className="formwrapper p-sm-2 shadow">
        <Form onSubmit={submitForm}>
          <div className="transferoption mt-5 mb-5">
            <FloatingLabel
              key="asset-from"
              controlId="floatingSelect"
              label="Asset"
            >
              <Form.Select
                value={formDetails.assetFrom}
                onChange={(e) => {
                  setFormDetails({ ...formDetails, assetFrom: e.target.value });
                }}
                aria-label="Floating label select example"
              >
                <option>FROM</option>
                <option value="Luna">Luna</option>
              </Form.Select>
            </FloatingLabel>

            <div>
              <h5>Transfer To</h5>
            </div>

            <FloatingLabel
              key="asset-to"
              controlId="floatingSelect"
              label="Asset"
            >
              <Form.Select
                value={formDetails.assetTo}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, assetTo: e.target.value })
                }
                aria-label="Floating label select example"
              >
                <option>TO</option>
                <option value="Luna">Luna</option>
              </Form.Select>
            </FloatingLabel>
          </div>

          <div className="detailswrapper">
            <FloatingLabel
              key="asset"
              className="w-75"
              controlId="floatingSelect"
              label="Asset"
            >
              <Form.Select
                value={formDetails.asset}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, asset: e.target.value })
                }
                aria-label="Floating label select example"
              >
                <option>Open this select menu</option>
                <option value="Luna">Luna</option>
                <option value="UST">UST</option>
                <option value="KRT">KRT</option>
              </Form.Select>
            </FloatingLabel>

            <Form.Group className="mb-3 w-75 " controlId="formBasicEmail">
              <Form.Control
                className="input"
                value={formDetails.amount}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, amount: e.target.value })
                }
                type="number"
                placeholder="Amount"
              />
            </Form.Group>

            <Form.Group
              className="mb-3 w-75 inputbox"
              controlId="formBasicPassword"
            >
              <Form.Control
                className="input"
                value={formDetails.address}
                onChange={(e) =>
                  setFormDetails({ ...formDetails, address: e.target.value })
                }
                type="password"
                placeholder="Destination Address"
              />
            </Form.Group>

            <Button
              className="rounded-pill w-25 p-2 submitbtn"
              variant="primary"
              type="submit"
            >
              Next
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Detailsform;
