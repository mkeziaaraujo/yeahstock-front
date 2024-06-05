import { Button } from "../../components/Button";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const signIn = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type SignInFormType = z.infer<typeof signIn>;

export function SignIn() {
  const { register, handleSubmit, formState } = useForm<SignInFormType>({
    resolver: zodResolver(signIn),
  });

  const { errors } = formState;

  function handleLogin(data: SignInFormType) {
    console.log(data);
  }

  return (
    <div>
      <h1 className="text-white text-3xl">Login</h1>
      <form className="mt-4 space-y-4" onSubmit={handleSubmit(handleLogin)}>
        <Input
          label="Email"
          {...register("email")}
          isError={!!errors.email?.message}
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          isError={!!errors.password?.message}
        />

        <Button type="submit">Login</Button>
      </form>

      <div className="mt-4">
        <span className="text-white text-center">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-blue-500">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
}
