import { screen } from "@testing-library/react";
import { renderWithReduxProviders } from "../../utils/testReduxProvider";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./index";

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
          <Navbar/>
      </BrowserRouter>
    );
});

test("should render the logo", () => {
    const logo = screen.queryByAltText("Logo");
    expect(logo).toBeInTheDocument();
});

test("should show the cloud provider logo for the current project", () => {
    const cloudProviderLogo = screen.queryByAltText(/cloud provider/i);
    expect(cloudProviderLogo).toBeInTheDocument();
});

test("should show the current active project name", () => {
    const activeProjectName = screen.getByText(/project/i);
    expect(activeProjectName).toBeInTheDocument();
});

test("should show a profile photo", () => {
    const profilePhoto = screen.getByAltText(/profile/i);
    expect(profilePhoto).toBeInTheDocument();
});