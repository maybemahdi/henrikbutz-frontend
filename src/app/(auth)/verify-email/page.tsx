"use client";

import MyButton from "@/components/ui/core/MyButton/MyButton";
import MyFormOTP from "@/components/ui/core/MyForm/MyFormOTP/MyFormOTP";
import MyFormWrapper from "@/components/ui/core/MyForm/MyFormWrapper/MyFormWrapper";
import {
  // useForgetPassOtpVerifyMutation,
  useLoginMutation,
  useOtpMutation,
} from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { handleAsyncWithToast } from "@/utils/handleAsyncWithToast";
import { MailOutlined } from "@ant-design/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import { z } from "zod";

const schema = z.object({
  otp: z.string().length(6),
});

const VerifyEmailPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get("redirectUrl");

  const dispatch = useAppDispatch();

  const [verifyOtp] = useOtpMutation();
  // const [forgetPassOtpVerify] = useForgetPassOtpVerifyMutation();
  const [login] = useLoginMutation();
  const onFinish = async (values: { otp: string[] }) => {
    // const user = JSON.parse(sessionStorage.getItem("userDataToLogin")!);
    // if (redirectUrl === "/") {
    //   const res = await handleAsyncWithToast(async () => {
    //     return verifyOtp({ email: user.email, otp: Number(values.otp) });
    //   }, "Verifying OTP...");
    //   if (res?.data?.success) {
    //     const res = await handleAsyncWithToast(async () => {
    //       return login({ email: user.email, password: user.password });
    //     }, "Logging in...");
    //     if (res?.data?.success) {
    //       sessionStorage.removeItem("userDataToLogin");
    //       const { accessToken, ...rest } = res.data.data;
    //       dispatch(
    //         setUser({
    //           user: rest,
    //           access_token: accessToken,
    //         })
    //       );
    //       router.push(redirectUrl || "/login");
    //     } else {
    //       router.push("/login");
    //     }
    //     return;
    //   }
    // }
    // if (redirectUrl === "/reset-password") {
    //   const res = await handleAsyncWithToast(async () => {
    //     return forgetPassOtpVerify({
    //       email: user.email,
    //       otp: Number(values.otp),
    //     });
    //   }, "Verifying OTP...");
    //   if (res?.data?.success) {
    //     sessionStorage.removeItem("userDataToLogin");
    //     sessionStorage.setItem("tokenToReset", res.data.data);
    //     router.push("/reset-password");
    //   }
    // }
  };

  return (
    <section className="py-16 bg-white flex items-center justify-center min-h-[calc(100vh-128px)]">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Icon */}
        <div className="w-32 h-32 mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg">
          <MailOutlined className="text-white text-6xl" />
        </div>

        {/* Title & Subtitle */}
        <div className="space-y-2">
          <h2 className="text-3xl font-bold text-text-primary">
            Submit Verification Code
          </h2>
          <p className="text-text-secondary text-lg">
            We already sent a verification code to your email
          </p>
        </div>

        {/* Form */}
        <MyFormWrapper
          onSubmit={onFinish}
          className="space-y-6"
          resolver={zodResolver(schema)}
        >
          <MyFormOTP name="otp" length={6} />
          <MyButton label="Verify Email" type="submit" fullWidth />
        </MyFormWrapper>
      </div>
    </section>
  );
};

export default VerifyEmailPage;
