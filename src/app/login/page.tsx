import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <form className="grid grid-cols-1 gap-2">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="password" required />
      <button formAction={login}>Log in</button>
      <button formAction={signup}>Sign up</button>
    </form>
  );
}