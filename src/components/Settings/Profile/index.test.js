import { screen } from "@testing-library/react";
import { renderWithReduxProviders } from "../../../utils/testReduxProvider";
import { BrowserRouter } from "react-router-dom";
import Profile from "./index";

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
          <Profile/>
      </BrowserRouter>
    );
});

test("should render the Profile component", () => {
    const emailInput = screen.getByText(/email/i);
    expect(emailInput).toBeInTheDocument();

    const displayNameInput = screen.getByText(/name/i);
    expect(displayNameInput).toBeInTheDocument();
});