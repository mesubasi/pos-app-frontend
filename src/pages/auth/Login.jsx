//Login.jsx

import { Button, Form, Input, Carousel, Checkbox, message } from 'antd'
import { Link, useNavigate } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/auth/login", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });

            const data = await res.json();

            if (res.status === 200) {

                // Kullanıcı bilgilerini localStorage'a kaydet
                localStorage.setItem(
                    "posUser",
                    JSON.stringify({
                        accessToken: data.accessToken,
                        email: data.email,
                    })
                );
                message.success("Successfully Logged In!");
                navigate("/");
            } else if (res.status === 404) {
                message.error("User Not Found!");
            } else if (res.status === 403) {
                message.error("Invalid Password!");
            }
            setLoading(false);
        } catch (error) {
            message.error("Oops. Something Went Wrong!");
            console.log(error);
            setLoading(false);
        }
    }

    return (
        <div className='h-screen'>
            <div className='flex justify-between h-full'>
                <div className='xl:px-20 px-10 w-full flex flex-col h-full justify-center relative'>
                    <h1 className='text-center text-5xl font-bold mb-2'>LOGO</h1>
                    <Form layout='vertical' size='large' onFinish={onFinish} initialValues={{ remember: false }}>
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
                            <Button type='primary' htmlType='submit' className='w-full' size='large' loading={loading}>Sign In</Button>
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

export default Login;
