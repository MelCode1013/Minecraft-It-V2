import "../global/globalStyle.css";

const clientID = process.env.clientID;

function Login() {
  return (
    <div>
      <h1>Log in</h1>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login with Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default Login;
