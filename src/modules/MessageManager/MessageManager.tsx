import React from 'react';
import LeftNavBar from '../../shared/components/NavBar/LeftNavBar';

const MessageManager = () => {
    return(
    <div className="card card-default message-manager-card">
            <div className="card-header card-header-border-bottom">
              <h2> Message Manager </h2>
              <a href="#" data-toggle="modal" data-target="#addMessager">
                <i className="fa fa-plus-circle add-button" aria-hidden="true"></i>
              </a>

            </div>
            <div className="card-body">
              <div className="responsive-data-table">
                <table id="responsive-data-table" className="table dt-responsive nowrap custom-table">
                  <thead>
                    <tr>
                      <th> </th>
                      <th>Employee ID</th>
                      <th>Name</th>
                      <th>Message</th>
                      <th>Acction</th>
                      <th>Notification</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="control outlined control-checkbox checkbox-primary">
                          <input type="checkbox" />
                          <div className="control-indicator"></div>
                        </label>
                      </td>
                      <td>G1211123</td>
                      <td>Lorum lipsum</td>
                      <td>Aliquam tincidunt vehicula faucibus. Morbi et risus rhoncus, mollis sapien venenatis, rhoncus
                        arcu. Duis sit amet elementum est.</td>
                      <td> <a href="#" className="delete-icon btn btn-primary"> <i className="mdi mdi-delete"></i> Delete </a>
                      </td>
                      <td> <a href="#" className="send-icon btn btn-outline-primary"> <i className="mdi mdi-send"></i> Send </a>
                      </td>
                    </tr>


                  </tbody>
                </table>
              </div>


            </div>
          </div>
          )
}
export default MessageManager;