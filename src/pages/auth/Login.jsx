//Login.jsx

import { Button, Form, Input, Carousel, Checkbox } from 'antd'
import { Link } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel';

const Login = () => {
    const contentStyle = {
        margin: 0,
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    return (
        <div className='h-screen'>
            <div className='flex justify-between h-full'>
                <div className='xl:px-20 px-10 w-full flex flex-col h-full justify-center relative'>
                    <h1 className='text-center text-5xl font-bold mb-2'>LOGO</h1>
                    <Form layout='vertical' size='large'>
                        <Form.Item label="Email" name={"email"} rules={[{ required: true, message: "Email Cannot Be Blank!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name={"password"} rules={[{ required: true, message: "Password Cannot Be Blank!" }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item name={"remember"} valuePropName='checked'>
                            <div className='flex justify-between items-center'>
                                <Checkbox>
                                    Remember Me
                                </Checkbox>
                                <Link>
                                    Forgot Password?
                                </Link>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='w-full' size='large'>Sign In</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full'>
                        Don't have an account yet? &nbsp;
                        <Link to="/register" className='text-blue-600'>
                            Register Now
                        </Link>
                    </div>
                </div>
                <div className='xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-[#6c63ff]'>
                    <div className='w-full h-full flex items-center'>
                        <div className='w-full'>
                            <Carousel className='!h-full px-6' autoplay autoplaySpeed={3000}>
                                <AuthCarousel img="/images/responsive.svg" title="Responsive" desc="Compatibility with All Device Sizes" />
                                <AuthCarousel img="/images/statistic.svg" title="Statistics" desc="Expanded Statistics" />
                                <AuthCarousel img="/images/customer.svg" title="Customer Satisfaction" desc="Customers Satisfied with the Product at the End of the Experience" />
                                <AuthCarousel img="/images/admin.svg" title="Admin Panel" desc="One-Stop Management" />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Login