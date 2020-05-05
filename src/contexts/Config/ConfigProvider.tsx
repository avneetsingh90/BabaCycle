import React, { Component } from 'react';
import ConfigContext from './ConfigContext';
import IConfig from '../../models/IConfig';
import appConfig from '../../helpers/config.helper';

class ConfigProvider extends Component {

    config: IConfig = {} as IConfig;
    constructor(props:any) {
        super(props);
        let appconfigObj = appConfig();
        this.config = {
            REACT_APP_API_URL: appconfigObj.REACT_APP_API_URL,
            REACT_APP_SHOW_MESSAGE_MANAGER: JSON.parse(appconfigObj.REACT_APP_SHOW_MESSAGE_MANAGER),
            REACT_APP_SHOW_EMPLOYEE_LIST: JSON.parse(appconfigObj.REACT_APP_SHOW_EMPLOYEE_LIST),
            REACT_APP_SHOW_PAID_LEAVE_APPLICATION: JSON.parse(appconfigObj.REACT_APP_SHOW_PAID_LEAVE_APPLICATION),
            REACT_APP_SHOW_EXPENSES_APPLICATION: JSON.parse(appconfigObj.REACT_APP_SHOW_EXPENSES_APPLICATION),
            REACT_APP_SHOW_PAYSLIP_DOWNLOAD: JSON.parse(appconfigObj.REACT_APP_SHOW_PAYSLIP_DOWNLOAD),
            REACT_APP_SHOW_PAYSLIP_HISTORY: JSON.parse(appconfigObj.REACT_APP_SHOW_PAYSLIP_HISTORY)
        }
    }

    render() {
        const { children } = this.props;
        return (
            <ConfigContext.Provider value={this.config}>
                {children}
            </ConfigContext.Provider>
        );
    }
}

export default ConfigProvider;
