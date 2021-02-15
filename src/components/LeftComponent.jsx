import { Row , Col , Image, Typography} from 'antd';
import { Pie } from '@ant-design/charts';
import React from 'react';
import icon from "../images/placeholder.svg"

const LeftComponent = () => {
    return (
        <div>
            <Row>
                <Col><Image src={icon} alt="" preview={false}/> </Col>
                <Col><Typography.Text>INDIA COVID-19  Tracker</Typography.Text>
                <Typography.Text>Let's all  pray to make our Earth Covid-19 free soon,Stay Safe and do The Locate</Typography.Text>
                </Col>
                <Row>
                    <Col>
                    </Col>
                </Row>
            </Row>
        </div>
    );
};

export default LeftComponent;