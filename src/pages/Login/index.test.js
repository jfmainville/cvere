import { fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithReduxProviders } from "../../utils/testReduxProvider";
import { BrowserRouter } from "react-router-dom";
import Login from "./index";

const mockGetAuth = jest.fn();
const mockValidateAuth = jest.fn();

jest.mock("firebase/auth", () => {
    return {
        getAuth: () => mockGetAuth,
        onAuthStateChanged: () => mockValidateAuth
    };
});

beforeEach(() => {
    renderWithReduxProviders(
      <BrowserRouter>
          <Login/>
      </BrowserRouter>
    );
});

test("should render the sign in with Google button", () => {
    const signInWithGoogleButton = screen.getByText(/sign in with google/i);
    expect(signInWithGoogleButton).toBeInTheDocument();
});

test("should render the sign in with GitHub button", () => {
    const signInWithGitHubButton = screen.getByText(/sign in with github/i);
    expect(signInWithGitHubButton).toBeInTheDocument();
});

test("should render the email field", () => {
    const emailField = screen.getByPlaceholderText(/email/i);
    expect(emailField).toBeInTheDocument();
});

test("should render the password field", () => {
    const passwordField = screen.getByPlaceholderText(/password/i);
    expect(passwordField).toBeInTheDocument();
});

test("should render the login button", () => {
    const loginButton = screen.getByText(/login/i);
    expect(loginButton).toBeInTheDocument();
});

test("should render the forgot password link", () => {
    const forgotPasswordLink = screen.getByText(/forgot password?/i);
    expect(forgotPasswordLink).toBeInTheDocument();
});

test("should render the signup link", () => {
    const signupLink = screen.getByText(/signup/i);
    expect(signupLink).toBeInTheDocument();
});

test("should fail to login using an email and a password", async () => {
    const emailInput = screen.getByPlaceholderText(/email/i);
    fireEvent.change(emailInput, { target: { value: "testuser@local.com" } });
    expect(emailInput).toHaveValue("testuser@local.com");

    const passwordInput = screen.getByPlaceholderText(/password/i);
    fireEvent.change(passwordInput, { target: { value: "password" } });
    expect(passwordInput).toHaveValue("password");

    const loginButton = screen.getByTestId("submit");
    fireEvent.click(loginButton);

    const loginErrorMessage = await waitFor(() => screen.getByText(/invalid username or password/i));
    expect(loginErrorMessage).toBeInTheDocument();
});