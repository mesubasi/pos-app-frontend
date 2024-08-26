//Register.jsx

import { Button, Form, Input, Carousel, message } from 'antd'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import AuthCarousel from '../../components/auth/AuthCarousel';
import { useState } from 'react';

const Register = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/auth/register", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            if (res.status === 200) {
                message.success("Successfully Registered!");
                navigate("/login");
                setLoading(false);
            }
            if (res.status === 403) {
                message.error("Email already in use!");
                const timeOut = setTimeout(() => {
                    navigate(0);
                }, 3000);
                setLoading(false);
            }
        } catch (error) {
            message.error("Ooppsss. Went Wrong!");
            console.log(error);
        }
    }

    return (
        <div className='h-screen'>
            <div className='flex justify-between h-full'>
                <div className='xl:px-20 px-10 w-full flex flex-col h-full justify-center relative'>
                    <h1 className='text-center text-5xl font-bold mb-2'>LOGO</h1>
                    <Form layout='vertical' size='large' onFinish={onFinish}>
                        <Form.Item label="User Name" name={"username"} rules={[{ required: true, message: "Username Cannot Be Blank!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Email" name={"email"} rules={[{ required: true, message: "Email Cannot Be Blank!" }]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Password" name={"password"} rules={[{ required: true, message: "Password Cannot Be Blank!" }]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item label="Password Again" name={"passwordAgain"} dependencies={["password"]} rules={[{ required: true, message: "Password Again Cannot Be Blank!" }, ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error("The password that you entered do not match!"));
                            },
                        }),]}>
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button type='primary' htmlType='submit' className='w-full' size='large' loading={loading}>Register</Button>
                        </Form.Item>
                    </Form>
                    <div className='flex justify-center absolute left-0 bottom-10 w-full'>
                        Do you have an account? &nbsp;
                        <Link to="/login" className='text-blue-600'>
                            Login Now</Link>
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

export default Register