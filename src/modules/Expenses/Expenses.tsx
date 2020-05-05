import React from 'react';

const Expenses = () => {
    return(
<div className="card card-default"> 
          <div className="card-header card-header-border-bottom">
            <h2>Expenses Application</h2>
            <a href="#" data-toggle="modal" data-target="#edit-express-application">
              <i className="fa fa-plus-circle add-button" aria-hidden="true"></i>
            </a>
            
          </div>
          <div className="card-body">
             <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th></th>
                    <th>Date</th>
                    <th>Summary</th>
                    <th>Location</th>
                    <th>Object </th>
                    <th>From</th>
                    <th>To</th> 
                    <th>Round/way One way</th>      
                    <th>Amount</th>  
                    <th>Memo</th>                          
                    <th>Action</th>                                                                             
                    
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
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                   
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="control outlined control-checkbox checkbox-primary">
                        <input type="checkbox" />
                        <div className="control-indicator"></div>
                      </label>                      
                    </td>
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                   
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="control outlined control-checkbox checkbox-primary">
                        <input type="checkbox" />
                        <div className="control-indicator"></div>
                      </label>                      
                    </td>
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="control outlined control-checkbox checkbox-primary">
                        <input type="checkbox" />
                        <div className="control-indicator"></div>
                      </label>                      
                    </td>
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                 
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="control outlined control-checkbox checkbox-primary">
                        <input type="checkbox" />
                        <div className="control-indicator"></div>
                      </label>                      
                    </td>
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                   
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="control outlined control-checkbox checkbox-primary">
                        <input type="checkbox" />
                        <div className="control-indicator"></div>
                      </label>                      
                    </td>
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                  
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="control outlined control-checkbox checkbox-primary">
                        <input type="checkbox" />
                        <div className="control-indicator"></div>
                      </label>                      
                    </td>
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                   
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="control outlined control-checkbox checkbox-primary">
                        <input type="checkbox" />
                        <div className="control-indicator"></div>
                      </label>                      
                    </td>
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                    
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="control outlined control-checkbox checkbox-primary">
                        <input type="checkbox" />
                        <div className="control-indicator"></div>
                      </label>                      
                    </td>
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                    
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label className="control outlined control-checkbox checkbox-primary">
                        <input type="checkbox" />
                        <div className="control-indicator"></div>
                      </label>                      
                    </td>
                    <td>2019/01/01</td>
                    <td>Meeting</td>
                    <td>Train</td>
                    <td>Osaka</td>                    
                    <td>Shinagawa</td>    
                    <td>Osaka</td>                                                            
                    <td>R</td>
                    <td>500</td>
                    <td> Lorem ipsum dolor sit amet </td>                    
                    <td>
                      <a href="#" data-toggle="modal" data-target="#delete-express-application" className="btn btn-primary"><i className="mdi mdi-delete"></i> Delete</a>
                      <a href="#" data-toggle="modal" data-target="#edit-express-application" className="btn btn-outline-primary"><i className="mdi mdi-pencil" aria-hidden="true"></i> Edit</a>                    
                    </td>
                  </tr>                                                                                                                                                                  

                  
                </tbody>
              </table>
             </div>
            <div className="table-pagination justify-content-between bottom-information">
              <div className="dataTables_info">
                Showing 31 to 40 of 57 entries
              </div>
              <div className="dataTables_paginate paging_simple_numbers">
                <ul className="pagination">
                  <li className="paginate_button page-item previous"><a href="#" className="page-link">Previous</a></li>
                  <li className="paginate_button page-item">
                    <a href="#" className="page-link">1</a>
                  </li>
                  <li className="paginate_button page-item">
                    <a href="#" className="page-link">2</a>
                  </li>
                  <li className="paginate_button page-item">
                    <a href="#" className="page-link">3</a>
                  </li>        
                  <li className="paginate_button page-item next"><a href="#" className="page-link">Next</a></li>     
                </ul>
              </div>
            </div>
            </div>
          </div>
    
)
}
export default Expenses;