import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from "styled-components";
import "./ChatBot.css";

class Review extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            gender: '',
            age: '',
            purpose: '',
            opened: false,
        };
    }

    componentWillMount() {
        const { steps } = this.props;
        const { name, gender, age } = steps;

        this.setState({ name, gender, age });
    }

    render() {
        const { name, gender, age } = this.state;
        return (
            <div style={{ width: '100%' }}>
                <h3>Summary</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{name.value}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{gender.value}</td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{age.value}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

Review.propTypes = {
    steps: PropTypes.object,
    opened: PropTypes.bool,
};

Review.defaultProps = {
    steps: undefined,
    opened: false,
};

class SimpleForm extends Component {
    render() {
        // all available props
        const theme = {
            background: '#f5f8fb',
            fontFamily: 'Helvetica Neue',
            headerBgColor: '#7FBF7F',
            headerFontColor: '#fff',
            headerFontSize: '15px',
            botBubbleColor: '#7FBF7F',
            botFontColor: '#fff',
            userBubbleColor: '#fff',
            userFontColor: '#4a4a4a',
        };
        const opened = false;
        return (
            <ThemeProvider theme={theme}>

            <ChatBot 
                className="chatBot"
                opened={opened}
                steps={[
                    {
                        id: '1',
                        message: 'Hi there, welcome to The Muses!',
                        trigger: 'intro',
                    },
                    {
                        id: 'intro',
                        message: 'We are a Non-Profit organisation devoted to giving everyone in the world equal access to education.',
                        trigger: 'namemessage',
                    },
                    {
                        id: 'namemessage',
                        message: 'What is your name?',
                        trigger: 'name',
                    },
                    {
                        id: 'name',
                        user: true,
                        trigger: '3',
                    },
                    {
                        id: '3',
                        message: 'Hi {previousValue}! What would you like to do with The Muses?',
                        trigger: 'purpose',
                    },
                    {
                        id: 'purpose',
                        options: [
                            { value: 'donate', label: 'Donate', trigger: 'donate' },
                            { value: 'access', label: 'Access Data', trigger: '5' },
                            { value: 'learn', label: 'Learn More', trigger: '5' },
                        ],
                    },
                    {
                        id: 'donate',
                        message: 'We really appreciate you wanting to help and so will everyone who is helped through your donation. How would you like to donate to free education?',
                        trigger: 'donatetype',
                    },
                    {
                        id: 'donatetype',
                        options: [
                            { value: 'money', label: 'Donate Funds', trigger: '5' },
                            { value: 'time', label: 'Donate Time', trigger: '5' },
                        ],
                    },
                    {
                        id: '5',
                        message: 'How old are you?',
                        trigger: 'age',
                    },
                    {
                        id: 'age',
                        user: true,
                        trigger: '7',
                        validator: (value) => {
                            if (isNaN(value)) {
                                return 'value must be a number';
                            } else if (value < 0) {
                                return 'value must be positive';
                            } else if (value > 120) {
                                return `${value}? Come on!`;
                            }

                            return true;
                        },
                    },
                    {
                        id: '7',
                        message: 'Great! Check out your summary',
                        trigger: 'review',
                    },
                    {
                        id: 'review',
                        component: <Review />,
                        asMessage: true,
                        trigger: 'update',
                    },
                    {
                        id: 'update',
                        message: 'Would you like to update some field?',
                        trigger: 'update-question',
                    },
                    {
                        id: 'update-question',
                        options: [
                            { value: 'yes', label: 'Yes', trigger: 'update-yes' },
                            { value: 'no', label: 'No', trigger: 'end-message' },
                        ],
                    },
                    {
                        id: 'update-yes',
                        message: 'What field would you like to update?',
                        trigger: 'update-fields',
                    },
                    {
                        id: 'update-fields',
                        options: [
                            { value: 'name', label: 'Name', trigger: 'update-name' },
                            { value: 'gender', label: 'Gender', trigger: 'update-gender' },
                            { value: 'age', label: 'Age', trigger: 'update-age' },
                        ],
                    },
                    {
                        id: 'update-name',
                        update: 'name',
                        trigger: '7',
                    },
                    {
                        id: 'update-gender',
                        update: 'gender',
                        trigger: '7',
                    },
                    {
                        id: 'update-age',
                        update: 'age',
                        trigger: '7',
                    },
                    {
                        id: 'end-message',
                        message: 'Thanks! Your data was submitted successfully!',
                        end: true,
                    },
                    // On last question must submit form to graphcool backend - queryForm
                ]}
                    
                
            />
            </ThemeProvider>

        );
    }
}

export default SimpleForm;