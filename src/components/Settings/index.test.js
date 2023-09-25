import { fireEvent, screen } from "@testing-library/react";
import { renderWithReduxProviders } from "../../utils/testReduxProvider";
import { BrowserRouter } from "react-router-dom";
import Settings from "./index";

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
          <Settings/>
      </BrowserRouter>
    );
});

test("should render the Settings component", () => {
    const modal = screen.getByText(/settings/i);
    expect(modal).toBeInTheDocument();
});

test("should render all the settings menu items", () => {
    const profile = screen.getByText(/profile/i);
    expect(profile).toBeInTheDocument();

    const providers = screen.getByText(/providers/i);
    expect(providers).toBeInTheDocument();

    const subscription = screen.getByText(/subscription/i);
    expect(subscription).toBeInTheDocument();
});

test("should render the profile section by default", () => {
    const profileSection = screen.getByText(/email/i);
    expect(profileSection).toBeInTheDocument();
});

test("should render the providers section", () => {
    const providersSection = screen.getByText(/providers/i);
    fireEvent.click(providersSection);

    const awsProviderLogo = screen.getByAltText(/aws/i);
    expect(awsProviderLogo).toBeInTheDocument();

    const azureProviderLogo = screen.getByAltText(/azure/i);
    expect(azureProviderLogo).toBeInTheDocument();

    const gcpProviderLogo = screen.getByAltText(/gcp/i);
    expect(gcpProviderLogo).toBeInTheDocument();
});

test("should render the subscription section", () => {
    const subscriptionSection = screen.getByText(/subscription/i);
    fireEvent.click(subscriptionSection);

    const subscriptionFreePlan = screen.getByText(/free/i);
    expect(subscriptionFreePlan).toBeInTheDocument();
});
